import { useState, useEffect } from "react";

export interface Product {
    id: number;
    name: string;
    price: number;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
    };
}

export interface Data {
    products: Product[];
}

interface FetchHookResult<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
}

//https://fakestoreapi.com/products/category/jewelery

export default function useFetch(url: string): FetchHookResult<Data> {
    const [data, setData] = useState<Data | null>(null);
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
