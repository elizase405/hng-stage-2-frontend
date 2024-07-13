import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutBody from "../components/CheckoutBody";
import { useState } from "react";

const Checkout = () => {
    const [address, setAddress] = useState(true);
    const [shipping, setShipping] = useState(false);
    const [payment, setPayment] = useState(false);

    const handleAddress = () => {
		setAddress(true)
        setShipping(false)
        setPayment(false)
	}
    const handleShipping = () => {
        setShipping(true)
		setAddress(false)
		setPayment(false)
	}
    const handlePayment = () => {
        setPayment(true)
		setAddress(false)
		setShipping(false)
	}

	return (
		<div className="md:bg-[#EFF2F6] w-full box-border">
			<Navbar />
			<CheckoutBody payment={payment} handlePayment={handlePayment} shipping={shipping} handleShipping={handleShipping} address={address} handleAddress={handleAddress}/>
			<Footer />
		</div>

	);
}

export default Checkout;