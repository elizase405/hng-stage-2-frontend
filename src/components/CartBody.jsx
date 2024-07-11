import womenwatch from "../img/products/womenwatch.png"
import womenwatch2 from "../img/products/womenwatch2.png"
import { Link, useNavigate } from "react-router-dom";

const CartBody = () => {
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout")
	}
	return (
		<div className="w-[80%] mx-auto">
			<h3 className="font-bold text-2xl mt-10 mb-2">Your Cart</h3>
            <div className="flex flex-col md:flex-row flex-wrap order-1">
    			<div className="flex flex-col md:w-1/2">
	    			<div>
		    			<p className="font-semibold mb-4">Not ready to checkout? <Link to="/products" className="text-[#ff8000]" >Continue Shopping</Link></p>
			    		<div className="flex">
				    		<img src={womenwatch} alt="women's watch" className="w-[40%] h-[40%] sm:w-[10%] sm:h-[10%] md:w-[15%] md:h-[15%] mr-2"/>
					    	<div>
						    	<p className="font-bold text-lg">Women Girl Watch Silicone Printed F</p>
							    <p className="font-semibold text-sm">Size L</p>
    							<p className="font-semibold text-sm">Quantity 1</p>
	    						<p className="font-bold text-lg">$230</p>
		    				</div>
			    		</div>
				    	<div className="border border-black my-4 w-3/4"></div>
					    <div className="flex">
						    <img src={womenwatch2} alt="women's watch" className="w-[40%] h-[40%] sm:w-[10%] sm:h-[10%] md:w-[15%] md:h-[15%] mr-2"/>
    						<div>
	    						<p className="font-bold text-lg">Fashionable Women Girl Watch Sil...</p>
					    		<p className="font-semibold text-sm">Size S</p>
						    	<p className="font-semibold text-sm">Quantity 1</p>
							    <p className="font-bold text-lg">$55</p>
    						</div>
	    				</div>
		    		</div>
    			</div>
                <div className="md:w-1/2 order-last md:order-2">
                    <h3 className="font-bold text-lg my-8 md:mb-8 md:mt-0">Order Summary</h3>
                    <input className="p-3 outline-none border border-black mb-8 w-full" type="text" placeholder="WXUEPIEUPOIERW -00293" />
                    <div className="mb-2 flex justify-between w-full">
                        <p>Subtotal</p>
                        <p>$285</p>
                    </div>
                    <div className="mb-2 flex justify-between w-full">
                        <p>Shipping</p>
                        <p className="text-[#909090]">Calculated upon checkout</p>
                    </div>
				    <div className="border border-black my-4 w-full"></div>
                    <div className="mb-2 flex justify-between w-full">
                        <p>Total</p>
                        <p>$285</p>
                    </div>
                    <button onClick={handleCheckout} className="block pt-2 mt-10 rounded-md text-center text-white h-10 w-full bg-[#ff8000] mt-3 text-sm font-semibold pb-2">Continue to checkout</button>
                </div>
                <div className="md:w-2/5 md:order-3">
                    <h3 className="font-bold text-lg my-8 md:mb-8 md:mt-0">Order Information</h3>
				    <div className="border-2 border-[#909090] my-4 w-full"></div>
                    <div className="text-[#909090] mb-2 flex justify-between">
                        <p className="semibold">Return Policy</p>
                        <p>_</p>
                    </div>
                    <p className="text-[#909090]">This is our example return policy which is everything you need to know about our returns</p>
                    <div className="border border-[#909090] my-4 w-full"></div>
                    <div className="mb-2 flex justify-between text-[#909090]">
                        <p className="semibold">Shipping Options</p>
                        <p>+</p>
                    </div>
                    <div className="border border-[#909090] my-4 w-full"></div>
                    <div className="mb-2 flex justify-between text-[#909090]">
                        <p className="semibold">Shipping Options</p>
                        <p>+</p>
                    </div>
                    <div className="border border-[#909090] my-4 w-full"></div>
                </div>
            </div>
		</div>

	);
}

export default CartBody;