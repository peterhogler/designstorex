"use client";

import { useState, useEffect } from "react";
import { CgSearch, CgUser, CgHeart, CgShoppingCart, CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../hooks/useFetch";
import { REMOVE_ITEM } from "../redux/cartReducer";
import { iteratorSymbol } from "immer/dist/internal";

const Navbar = () => {
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

    function handleProductDelete(product: Product) {
        dispatch(REMOVE_ITEM(product));
    }

    return (
        <>
            <div className="overflow-y-hidden hidden md:flex py-2 bg-gray-800/95 text-slate-200 items-center justify-center text-center">
                <div className="flex items-center justify-center">
                    <span>25% off</span>
                    <span className="mx-2">| Free shipping</span>
                    <span className="mr-2">| Enter code: </span>
                    <span className="font-semibold">Peter Demo 🔥</span>
                </div>
            </div>
            <nav className="relative h-20 py-4 px-4 flex items-center border-b border-b-gray-300 bg-gray-50/50 border-l border-r font-semibold">
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
                <div className="flex ml-auto items-center relative z-10">
                    <ul className="flex gap-6">
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
                        className="hidden md:flex flex-col z-50 absolute top-[6.2rem] right-0 bg-white gap-5 p-5 border border-black w-[20vw]"
                        onMouseEnter={() => {
                            if (timeoutId) clearTimeout(timeoutId);
                        }}
                        onMouseLeave={() => setOnHover(false)}>
                        {cart.length === 0 ? (
                            <h1 className="text-lg text-center ">Your shopping cart is empty</h1>
                        ) : (
                            <>
                                <h1 className="text-lg text-center">Shopping Cart</h1>
                                <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
                                    {cart.map((product: Product) => {
                                        return (
                                            <>
                                                <div
                                                    key={product.id}
                                                    className="flex items-center gap-4 my-4">
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="h-20 w-20 object-cover"
                                                    />
                                                    <div className="flex flex-col">
                                                        <h1 className="text-lg">{product.title}</h1>
                                                        <div className="flex gap-3 text-md">
                                                            <span>Quantity: {product.quantity}</span>
                                                            <span>${product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5">
                                                    <span className="text-sm">Add to wishlist</span>
                                                    <span
                                                        className="text-sm underline underline-offset-4"
                                                        onClick={() => handleProductDelete(product)}>
                                                        Remove item
                                                    </span>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col text-lg gap-2">
                                    <div className="flex justify-between">
                                        <span>Shipping Cost:</span>
                                        <span>$5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total:</span>
                                        <span className="font-semibold">${total.toFixed(0)}</span>
                                    </div>
                                </div>
                                <button
                                    className="px-8 py-2 bg-gray-800 text-white  font-semibold hover:text-emerald-500 duration-300 ease-in-out"
                                    disabled={cart.length < 1}>
                                    Go to checkout
                                </button>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
