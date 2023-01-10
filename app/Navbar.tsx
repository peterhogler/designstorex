"use client";

import { useState, useEffect } from "react";
import { CgSearch, CgUser, CgHeart, CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../app/Types/Interfaces";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/cartReducer";

const Navbar: React.FC = () => {
    const [onHover, setOnHover] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const pathname = usePathname();
    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.products);
    const total = useSelector((state: RootState) => state.total);

    const totalCartQuantity = cart.reduce((total, product: Product) => {
        if (product.quantity !== undefined) {
            return (total += product.quantity);
        }
        return total;
    }, 0);

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
        if (cart.length > 0) {
            setOnHover(true);

            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setTimeoutId(
                setTimeout(() => {
                    setOnHover(false);
                }, 4500)
            );
        }
    }, [cart]);

    const handleProductAdd = (product: Product) => {
        dispatch(ADD_ITEM(product));
        const currentCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
        currentCart.push(product);
        window.localStorage.setItem("cart", JSON.stringify(currentCart));
    };
    const handleProductDelete = (product: Product) => {
        dispatch(REMOVE_ITEM(product));
        const currentCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
        const updatedCart = currentCart.filter((cartProduct: Product) => cartProduct.id !== product.id);
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <>
            <div className="overflow-y-hidden hidden md:flex py-2 bg-black text-slate-200 items-center justify-center text-center">
                <div className="flex items-center justify-center">
                    <span>25% off</span>
                    <span className="mr-2">| Enter code: </span>
                    <span className="mx-2">| Free shipping</span>
                    <span className="font-semibold">Peter Demo 🔥</span>
                </div>
            </div>
            <nav className="relative h-20 py-4 px-4 flex items-center  border-b-gray-300 lg:bg-gray-50/50 lg:border-l lg:border-b lg:border-r font-semibold">
                <div>
                    <Link href="/">
                        <div className="text-2xl hover:text-emerald-500 duration-200 ease">
                            Design Store X
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:flex ml-14 items-center">
                    <ul className="flex gap-6">
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/all-products" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="/all-products">All Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex ml-auto items-center relative z-10">
                    <ul className="flex gap-6">
                        <li className="cursor-pointer">
                            <CgSearch size={24}>Icon</CgSearch>
                        </li>
                        <li className="cursor-pointer hidden lg:block">
                            <CgUser size={24}>Icon</CgUser>
                        </li>
                        <li className="cursor-pointer">
                            <CgHeart size={24}>Icon</CgHeart>
                        </li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setOnHover(true)}>
                            <CgShoppingCart size={24}></CgShoppingCart>
                            {cart.length > 0 && (
                                <div className="absolute top-[-1rem] right-[-10px] bg-emerald-400 h-6 w-6 rounded-full grid place-items-center text-center text-sm">
                                    {totalCartQuantity}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                {onHover && (
                    <div
                        className="hidden md:flex flex-col z-50 absolute top-[6.2rem] right-0 bg-white gap-5 border border-black w-[336px]"
                        onMouseEnter={() => {
                            if (timeoutId) clearTimeout(timeoutId);
                        }}
                        onMouseLeave={() => setOnHover(false)}>
                        <div className="top-[-7.5px] right-[1.4rem] h-3 w-3 bg-white border-t border-l border-black absolute rotate-45" />
                        {cart.length === 0 ? (
                            <div className="text-center">
                                <div className="p-4">
                                    <h1 className="text-lg">Your shopping cart is empty</h1>
                                </div>
                                <div className="p-4 bg-gray-100">
                                    <div>
                                        <h1 className="mb-5">Looking for inspiration?</h1>
                                        <button className="relative w-full text-black border border-black justify-center py-[0.75rem] hover:bg-black hover:text-white duration-300 ease">
                                            <Link href="/all-products">View All Products</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="px-5 mt-3">
                                    <h1 className="text-lg text-center">Shopping Cart</h1>
                                </div>
                                <div className="flex flex-col overflow-y-auto max-h-[400px]">
                                    {cart.map((product: Product) => {
                                        return (
                                            <>
                                                <div
                                                    key={product.id}
                                                    className="px-5 flex items-center gap-4 my-4">
                                                    <div>
                                                        <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            className="h-20 w-20 object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1 className="text-lg mb-3">
                                                            {product.title.substring(0, 20)}
                                                        </h1>
                                                        <div className="flex space-evenly gap-4 text-md">
                                                            <span>{product.quantity}</span>
                                                            <div className="flex">
                                                                <button
                                                                    onClick={() => handleProductAdd(product)}>
                                                                    <div className="grid place-items-center h-full w-7 text-md bg-emerald-400">
                                                                        +
                                                                    </div>
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        handleProductDelete(product)
                                                                    }>
                                                                    <div className="grid place-items-center h-full w-7 bg-gray-50 text-md hover:bg-rose-600 duration-300 ease">
                                                                        -
                                                                    </div>
                                                                </button>
                                                            </div>
                                                            <span>${product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 px-5">
                                                    <span className="text-sm">Add to wishlist</span>
                                                    <button
                                                        className="text-sm underline underline-offset-4 hover:text-rose-600 duration-300 ease"
                                                        onClick={() => handleProductDelete(product)}>
                                                        Remove item
                                                    </button>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col text-lg gap-1 my-4 px-5">
                                    <div className="flex justify-between">
                                        <span>Shipping Cost:</span>
                                        <span>$5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total:</span>
                                        <span className="font-semibold text-xl">${total.toFixed(0)}</span>
                                    </div>
                                </div>
                                <div className="flex mx-5 mb-5">
                                    <button
                                        className="w-full py-[0.75rem] bg-black text-white  font-semibold hover:text-emerald-500 duration-300 ease-in-out"
                                        disabled={cart.length < 1}>
                                        Go to checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
