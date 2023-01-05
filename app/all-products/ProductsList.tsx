import { useState, useEffect } from "react";
import { Product, Data } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../redux/cartReducer";
import Link from "next/link";

interface ProductListProps {
    products: Data;
}

const ProductList: React.FC<ProductListProps> = (props: any) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [priceRange, setPriceRange] = useState(200);

    const { products } = props;

    const dispatch = useDispatch();

    const modifiedProducts = products.filter((product: Product) => {
        return product.category !== "electronics";
    });

    useEffect(() => {
        const filteredProducts = modifiedProducts.filter((product: Product) => {
            return (
                product.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
                product.title.toLowerCase().includes(searchFilter.toLowerCase())
            );
        });
        setFilteredProducts(filteredProducts);
    }, [searchFilter, priceRange]);

    function handleProductAdd(product: Product) {
        dispatch(ADD_ITEM(product));
    }

    return (
        <>
            <div className="h-10 mb-3 md:mb-4 flex flex-col md:flex-row items-center gap-4 font-semibold">
                <div className="flex w-full md:w-auto gap-2">
                    <label htmlFor="search">Search:</label>
                    <input
                        className="indent-2 ring-2 px-2 ring-slate-300 rounded flex-1 focus:outline-none focus:ring-emerald-500 duration-300 ease-in-out"
                        id="search"
                        type="text"
                        value={searchFilter}
                        placeholder="Ex. 'Jackets', 'Gold'"
                        onChange={(e) => setSearchFilter(e.target.value)}
                    />
                </div>
                <div className="hidden md:flex gap-4 accent-emerald-500/80">
                    <div className="flex gap-2">
                        <label htmlFor="price-range">Price Range:</label>
                        <input
                            type="range"
                            id="price-range"
                            min={0}
                            max={200}
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                        />
                        <span className="text-lg">Max ${priceRange ?? 0}</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pb-10">
                {filteredProducts.filter((product: Product) => product.price <= priceRange).length === 0 ? (
                    <div className="col-span-5 text-center text-2xl font-semibold">
                        <h1 className="text-2xl font-semibold">
                            No items were found, <br />
                            Please check your search settings.
                        </h1>
                    </div>
                ) : (
                    filteredProducts
                        .filter((product: Product) => product.price <= priceRange)
                        .map((product: Product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="z-10 flex flex-col p-4 bg-white rounded shadow hover:-translate-y-2 ease-in-out duration-300 group ">
                                    <Link href="all-products">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-64 object-cover rounded-t-lg  duration-300 ease-in-out"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="mt-auto">
                                        <h1 className="text-lg font-semibold h-8 mt-4 overflow-hidden">
                                            {product.title.substring(0, 50)}
                                        </h1>
                                        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mt-4">
                                            <div className="w-full">
                                                <span className="font-semibold text-xl">
                                                    ${product.price}
                                                </span>
                                            </div>
                                            <div className="flex gap-4 items-center w-full">
                                                <button
                                                    className="whitespace-nowrap w-full md:w-auto px-5 py-2 bg-black text-white font-semibold hover:text-emerald-500 duration-300 ease-in-out"
                                                    onClick={() => handleProductAdd(product)}>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                )}
            </div>
        </>
    );
};

export default ProductList;
