import { Link } from "react-router-dom";
import Address from "./Address"
import Shipping from "./Shipping"
import Payment from "./Payment"
import CartItems from "./CartItems"

const CheckoutBody = ( { handleClick, address, handleAddress, shipping, handleShipping, payment, handlePayment } ) => {
	return (
		<div className="w-[80%] mx-auto md:mb-60">
			<h3 className="font-bold text-3xl mt-10 mb-2">Checkout</h3>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <div className="mb-8">
                        {address ? <Link onClick={handleAddress} className="font-bold">Address</Link> : <Link onClick={handleAddress}>Address</Link>}
                        <div className="border-t-2 inline-block w-20 border-black mx-2"></div>
                        {shipping ? <Link onClick={handleShipping} className="font-bold">Shipping</Link> : <Link onClick={handleShipping}>Shipping</Link>}
                        <div className="border-t-2 inline-block w-20 border-black mx-2"></div>
                        {payment ? <Link onClick={handlePayment} className="font-bold">Payment</Link> : <Link onClick={handlePayment}>Payment</Link>}
                    </div>
                    {address && <Address handleClick={handleShipping}/>}
                    {shipping && <Shipping/>}
                    {payment && <Payment/>}
                </div>
                <div className="md:w-1/2">
                    <p className="text-2xl mb-5">Your cart</p>
                    <CartItems />
                    <input className="outline-none w-full md:w-5/6 p-2 pl-4 border border-[#909090] mb-2 md:bg-[#eff2f6] mt-6 mb-8" type="text" placeholder="WXUEPIEUPOIERW -00293"/>
                    <div className="flex justify-between md:w-5/6 mb-4">
                        <p>Subtotal</p>
                        <p>$285</p>
                    </div>
                    <div className="flex justify-between md:w-5/6 mb-4">
                        <p>Shipping</p>
                        <p>$30</p>
                    </div>
                    <div className="w-full md:w-5/6 border border-black mb-4"></div>
                    <div className="flex justify-between md:w-5/6">
                        <p>Total</p>
                        <p>$315</p>
                    </div>
                </div>
            </div>
		</div>

	);
}

export default CheckoutBody;
