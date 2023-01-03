"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgSearch, CgUser, CgHeart, CgShoppingCart, CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden md:flex py-2 bg-black text-slate-200 items-center justify-center text-center">
                <div className="flex items-center justify-center">
                    <span>25% off</span>
                    <span className="mx-2">| Free shipping</span>
                    <span className="mr-2">| Enter code: </span>
                    <span className="font-semibold">Peter Demo 🔥</span>
                </div>
            </div>
            <nav className="h-20 py-5 flex items-center border-b border-b-gray-300 font-semibold">
                <div>
                    <Link href="/">
                        <div className={`text-2xl ${pathname === "/" ? "text-emerald-400" : ""}`}>
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
                <div className="hidden md:flex ml-auto items-center">
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
                            <CgSearch size={23}>Icon</CgSearch>
                        </li>
                        <li className="cursor-pointer">
                            <CgUser size={23}>Icon</CgUser>
                        </li>
                        <li className="cursor-pointer">
                            <CgHeart size={23}>Icon</CgHeart>
                        </li>
                        <li className="cursor-pointer">
                            <CgShoppingCart size={23}>Icon</CgShoppingCart>
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
