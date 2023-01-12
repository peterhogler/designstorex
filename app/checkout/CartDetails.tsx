import { useSelector } from "react-redux";

const CartDetails = () => {
    const cart = useSelector((state: any) => state.cart);
    console.log(cart);
    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-bold">Summary Order</h1>
                <p className="my-3 max-w-[40ch]">
                    Check your item and select your shipping for better experience order item.
                </p>
            </div>
            <ul>*Items*</ul>
            <div>
                <h2>Shipping Method</h2>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Fedex Delivery</p>
                        <p>Delivery: 2-3 works</p>
                    </div>
                    <div>
                        <label htmlFor="checkbox">
                            Free:
                            <input type="checkbox" name="checkbox" id="checkbox" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;
