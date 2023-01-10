"use client";

import { usePathname } from "next/navigation";
import { BeatLoader } from "react-spinners";
import useSingleProduct from "../../../hooks/useSingleProduct";
import Product from "./Product";

const Page: React.FC = () => {
    const pathname = usePathname();
    const slug = pathname?.split("/").pop();
    const { data, isLoading, error } = useSingleProduct(`https://fakestoreapi.com/products/${slug}`);
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
                <Product product={data} />
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
