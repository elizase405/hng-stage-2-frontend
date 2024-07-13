import CartItem from "./CartItem"
import womenwatch from "../img/products/womenwatch.png"
import womenwatch2 from "../img/products/womenwatch2.png"

const CartItems = () => {
    return (
        <div>
            <CartItem img={womenwatch} price={"$230"} name={"Women Girl Watch Silicone Printed F"}/>
	    	<div className="border border-[#909090] my-4 mr-5 lg:w-5/6"></div>
            <CartItem img={womenwatch2} price={"$55"} name={"Fashionable Women Girl Watch Sil..."}/>
        </div>
    );
}

export default CartItems;