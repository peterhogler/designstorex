import React from "react";
import CartDetails from "./CartDetails";
import PaymentDetails from "./PaymentDetails";

const Page: React.FC = () => {
    return (
        <section className="grid grid-cols-2">
            <CartDetails />
            <PaymentDetails />
        </section>
    );
};

export default Page;
