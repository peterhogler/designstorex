import { useState, useEffect } from "react";
import { Product } from "../../hooks/useFetch";

export default function ProductList(props: any) {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [priceRange, setPriceRange] = useState(200);

    const { products } = props;

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

    console.log(filteredProducts);

    return (
        <>
            <div className="h-10 mb-3 md:mb-4 flex flex-col md:flex-row items-center gap-4 font-semibold">
                <div className="flex w-full md:w-auto gap-2">
                    <label htmlFor="search">Search:</label>
                    <input
                        className="indent-2 ring-1 ring-black rounded flex-1"
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
            <div className="grid lg:grid-cols-5 gap-5 pb-10">
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
                                    className="flex flex-col bg-white rounded-lg shadow-lg hover:translate-y-2 ease-in-out duration-300 group">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-64 object-cover rounded-t-lg group-hover:scale-90 duration-300 ease-in-out"
                                        loading="lazy"
                                    />
                                    <div className="p-4 mt-auto">
                                        <h1 className="text-lg font-semibold h-8 mb-2 overflow-hidden">
                                            {product.title.substring(0, 50)}
                                        </h1>
                                        <div className="flex justify-between items-center mt-10">
                                            <span className="font-semibold text-xl">${product.price}</span>
                                            <button className="px-5 py-2 bg-gray-800 text-white  font-semibold hover:text-emerald-500 duration-300 ease-in-out">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                )}
            </div>
        </>
    );
}