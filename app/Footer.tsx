"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="mt-auto pt-5 border-t border-t-gray-300 ">
            <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mb-4">
                <div>
                    <h1 className="font-semibold px-1 pb-3  border-b-gray-300 text-[1.1rem]">Categories</h1>
                    <ul className="font-medium flex flex-col gap-2">
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/all-products" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="all-products">All Products</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/men" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="Men">Men</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/woman" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="women">Woman</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/jewelry" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="jewelry">Jewelry</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold px-1 pb-3  border-b-gray-300 text-[1.1rem]">Subpages</h1>
                    <ul className="font-medium flex flex-col gap-2">
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="/">Homepage</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/about" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="women">About</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/contact" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="jewelry">Contact</Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:translate-x-2 p-1 duration-200 ease-linear hover:text-emerald-500 ${
                                pathname === "/stores" ? "text-emerald-500" : ""
                            }`}>
                            <Link href="electronics">Stores</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold pb-3  border-b-gray-300">Info</h1>
                    <p className="font-medium my-2">
                        The Project is a fictional store to showcase my skills using React, API, Next.js,
                        Tailwind, Redux, TypeScript and FramerMotion.
                    </p>
                    <p className="font-medium mb-[0.85rem]">
                        The store is a clothing and accessory store. <br />
                        Peter @ www.peterhogler.me
                        <br />
                    </p>

                    <div className="font-medium">Design Store X</div>
                </div>
            </div>
            <div className="bg-black text-white font-semibold flex flex-col md:flex-row items-center justify-between px-4 py-4 border-t border-t-gray-300">
                <div>Design Store X</div>
                <p className="text-center">&copy; 2023 Design Store X. Made By Peter</p>
            </div>
        </footer>
    );
}
