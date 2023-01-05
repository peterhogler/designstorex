"use client";
import useFetch from "../../hooks/useFetch";
import ProductsList from "../all-products/ProductsList";
import { BeatLoader } from "react-spinners";

const Page: React.FC = () => {
    const { data, error, isLoading } = useFetch("https://fakestoreapi.com/products");
    return (
        <section className="py-4">
            {isLoading ? (
                <div className="h-[50dvh] w-full grid place-items-center">
                    <div className="flex flex-col gap-2 items-center text-2xl">
                        Please wait while we load the products...
                        <BeatLoader size={50} color="#36d7b7" />
                        May take a few seconds...
                    </div>
                </div>
            ) : data ? (
                <ProductsList products={data} />
            ) : null}
            {error ? (
                <div className="flex flex-col gap-2 items-center text-2xl">
                    Error has occured, please refresh the site.
                </div>
            ) : null}
        </section>
    );
};

export default Page;
