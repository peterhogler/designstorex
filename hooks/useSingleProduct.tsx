import { useState, useEffect } from "react";
import { Product } from "../app/Types/Interfaces";

interface FetchHookResult {
    data: Product | null;
    error: Error | null;
    isLoading: boolean;
}

export default function useSingleProduct(url: string): FetchHookResult {
    const [data, setData] = useState<Product | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (e) {
                const error = new Error((e as Error).message);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, error, isLoading };
}
