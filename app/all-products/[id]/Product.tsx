"use client";

import { CgArrowLeft, CgArrowRight, CgFlagAlt, CgHeart } from "react-icons/cg";
import { Product } from "../../Types/Interfaces";
import { Capitalize } from "../../../utils/string/capitalize";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../../redux/cartReducer";

interface ProductProps {
    product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleGoBack = () => {
        router.back();
    };

    const handleProductAdd = (product: Product) => {
        dispatch(ADD_ITEM(product));
    };

    return (
        <div className="min-h-[50dvh] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 p-6 max-w-[1440px] m-auto">
            <div className="w-[520px] h-[360px] relative ">
                <div className="absolute grid place-items-center rounded-full top-4 right-6 h-10 w-10 bg-gray-200">
                    <button className="hover:text-rose-600 duration-300 ease ">
                        <CgHeart size={25} />
                    </button>
                </div>
                <img
                    className="h-full w-full object-contain block"
                    src={product.image}
                    alt={product.description}
                />
            </div>
            <div className="px-6">
                <div>
                    <div>
                        <h1 className="text-3xl font-semibold">{product.title}</h1>
                    </div>
                    <div className="flex items-center gap-3 text-black mt-6 w-max rounded">
                        <div className="flex text-lg gap-2">
                            <CgFlagAlt size={23} />
                            {Capitalize(product.category)}
                        </div>
                    </div>
                    <div className="text-lg">
                        <p className="my-6">{product.description}</p>
                    </div>
                    <div>
                        <p className="text-2xl">${product.price}</p>
                    </div>
                    <div className="flex gap-10 items-center mt-12 font-semibold">
                        <button
                            className="flex gap-2 hover:text-rose-600 duration-300 ease"
                            onClick={handleGoBack}>
                            <CgArrowLeft size={23} /> <span>Go back</span>
                        </button>
                        <button
                            className="flex gap-2 border border-black px-10 py-[0.75rem] duration-200 ease hover:bg-black hover:border-gray-300 hover:text-white"
                            onClick={() => handleProductAdd(product)}>
                            <span>Add to cart</span> <CgArrowRight size={23} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
