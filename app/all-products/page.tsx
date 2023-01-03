"use client";
import useFetch from "../../hooks/useFetch";
import ProductsList from "../all-products/ProductsList";
import { BeatLoader } from "react-spinners";

export default function Page() {
    const { data, error, isLoading } = useFetch("https://fakestoreapi.com/products");
    return (
        <section className="py-4">
            {isLoading ? (
                <div className="h-[50dvh] w-full grid place-items-center">
                    <div className="flex flex-col gap-2 items-center text-2xl">
                        Please wait while we load the products...
                        <BeatLoader size={50} color="#36d7b7" />
                        May take a few seconds as the API is slow.
                    </div>
                </div>
            ) : data ? (
                <ProductsList products={data} />
            ) : null}
            {error ? <div>Error</div> : null}
        </section>
    );
}
