const PaymentDetails = () => {
    return (
        <div className="p-6 bg-slate-300">
            <div>
                <h1 className="text-2xl font-bold">Payment Details</h1>
                <p className="my-3 max-w-[40ch] ">
                    Complete your purchase item by providing your payment details order.
                </p>
            </div>
            <form>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="text" placeholder="Email" id="email" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="cardNumber">
                        Card:
                        <input type="text" placeholder="4242 4242 4242 4242" id="cardNumber" required />
                    </label>
                    <label htmlFor="expiration">
                        <input type="text" placeholder="MM/YY" id="expirationYear" required />
                    </label>
                    <label htmlFor="cvv">
                        <input type="text" placeholder="722" id="cvv" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="card-holder">
                        <input type="text" placeholder="Card Holder" id="card-holder" />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PaymentDetails;
