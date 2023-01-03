"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/globals.css";
import { Karla } from "@next/font/google";

const karla = Karla({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={karla.className}>
            <head />
            <body className="flex flex-col min-h-[100dvh] max-w-[2000px] m-auto px-4">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
