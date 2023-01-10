export interface Product {
    id: number;
    name: string;
    price: number;
    title: string;
    description: string;
    category: string;
    image: string;
    quantity?: number;
    rating: {
        rate: number;
    };
}
