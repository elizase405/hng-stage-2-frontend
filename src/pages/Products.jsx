import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBody from "../components/ProductBody";
import Cart from "../pages/Cart";

const Products = () => {
	const [cart, setCart] = useState([])
	const navigate = useNavigate();
	function handleMoreProducts() {
		alert("No more products. Please Check again later.")
	}
	function handleAddToCart(obj) {
        setCart(cartObj => {
            const objIndex = cartObj.findIndex(item => item.name === obj.name);
            if (objIndex !== -1) {
                return cartObj.map((item, index) => index === objIndex ? { ...item, quantity: item.quantity + 1 } : item)
            } else {
                return [...cartObj, {...obj, quantity: 1}]
            }
        });
		alert("Product added!")
        console.log(cart)
	}

	return (
		<div className="md:bg-[#EFF2F6] w-full">
			<Navbar />
			<ProductBody handleMoreProducts={handleMoreProducts} handleAddToCart={handleAddToCart} />
			<Footer />
		</div>

	);
}

export default Products;