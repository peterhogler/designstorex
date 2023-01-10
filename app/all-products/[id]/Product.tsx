import { Product } from "../../Types/Interfaces";

interface ProductProps {
    product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    console.log(product);
    return <div>Product Item</div>;
};

export default Product;
