"use client";
import useProductListResult from "../../hooks/useProductListResult";
import { BeatLoader } from "react-spinners";
import ProductsList from "../all-products/ProductsList";

const Page: React.FC = () => {
    const { data, error, isLoading } = useProductListResult("https://fakestoreapi.com/products");
    return (
        <section>
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
                <div className="h-[50dvh] grid place-items-center text-2xl">
                    <div>
                        Error has occured, please refresh the site. <br />
                        Are you sure the product exist?
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default Page;
