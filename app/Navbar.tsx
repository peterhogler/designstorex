"use client";

import { useState, useEffect } from "react";
import { CgSearch, CgUser, CgHeart, CgShoppingCart, CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../hooks/useFetch";

const Navbar = () => {
    const [onHover, setOnHover] = useState(false);
    const pathname = usePathname();
    const cart = useSelector((state: RootState) => state.products);
    const total = useSelector((state: RootState) => state.total);

    useEffect(() => {
        if (cart.length > 0) {
            setOnHover(true);
            setTimeout(() => {
                setOnHover(false);
            }, 2500);
        }
    }, [cart]);

    return (
        <>
            <div className="overflow-y-hidden hidden md:flex py-2 bg-black text-slate-200 items-center justify-center text-center">
                <div className="flex items-center justify-center">
                    <span>25% off</span>
                    <span className="mx-2">| Free shipping</span>
                    <span className="mr-2">| Enter code: </span>
                    <span className="font-semibold">Peter Demo 🔥</span>
                </div>
            </div>
            <nav className="h-20 py-4 px-4 flex items-center border-b border-b-gray-300 bg-gray-50/50 border-l border-r font-semibold">
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
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/men" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="men">Men</Link>
                        </li>
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/women" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="women">Women</Link>
                        </li>
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/jewelry" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="jewelry">Jewelery</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex ml-auto items-center z-10">
                    <ul className="flex gap-6 mr-10">
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="/">Homepage</Link>
                        </li>
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/about" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="/about">About</Link>
                        </li>
                        <li
                            className={`hover:text-emerald-500 duration-200 ease ${
                                pathname === "/contact" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="hidden md:flex gap-6">
                        <li className="cursor-pointer">
                            <CgSearch size={24}>Icon</CgSearch>
                        </li>
                        <li className="cursor-pointer">
                            <CgUser size={24}>Icon</CgUser>
                        </li>
                        <li className="cursor-pointer">
                            <CgHeart size={24}>Icon</CgHeart>
                        </li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setOnHover(true)}>
                            <CgShoppingCart className="" size={24}></CgShoppingCart>
                            {cart.length > 0 && (
                                <div className="absolute top-[-1rem] right-[-10px] bg-emerald-400 h-6 w-6 rounded-full grid place-items-center text-center text-sm">
                                    {cart.length}
                                </div>
                            )}
                            {onHover && (
                                <div
                                    className="absolute top-14 right-[-1rem] flex flex-col bg-white gap-5 p-5 w-[15vw] border border-gray-300 z-99"
                                    onMouseLeave={() => setOnHover(false)}>
                                    {cart.length === 0 ? (
                                        <h1 className="text-lg text-center whitespace-nowrap">
                                            Your shopping cart is empty
                                        </h1>
                                    ) : (
                                        <>
                                            <h1 className="text-lg text-center">Shopping Cart</h1>
                                            {cart.map((product: Product) => {
                                                return (
                                                    <>
                                                        <div
                                                            key={product.id}
                                                            className="flex items-center gap-4">
                                                            <img
                                                                src={product.image}
                                                                alt={product.title}
                                                                className="h-20 w-20 object-cover"
                                                            />
                                                            <div className="flex flex-col">
                                                                <h1 className="text-lg">{product.title}</h1>
                                                                <h1 className="text-md">${product.price}</h1>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-5">
                                                            <span className="text-sm">Add to wishlist</span>
                                                            <span className="text-sm underline underline-offset-4">
                                                                Remove item
                                                            </span>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                            <div className="flex flex-col text-lg gap-2">
                                                <div className="flex justify-between">
                                                    <span>Express Delivery:</span>
                                                    <span>$5</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total:</span>
                                                    <span className="font-semibold">${total.toFixed()}</span>
                                                </div>
                                            </div>
                                            <button className="px-8 py-2 bg-gray-800 text-white  font-semibold hover:text-emerald-500 duration-300 ease-in-out">
                                                Go to checkout
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="flex align-center ml-auto md:hidden">
                    <button>
                        <CgMenuRightAlt size={28}>Icon</CgMenuRightAlt>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
