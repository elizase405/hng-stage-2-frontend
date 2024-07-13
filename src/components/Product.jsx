import fillheart from "../img/products/fill_heart.png";
import star from "../img/products/star.png"

const Product = ({ img, name, price, size, handleAddToCart }) => {
	return (
		<div className="relative">
			<img src={img} alt="a product"/>
			<img className="w-5 h-5 lg:w-auto lg:h-auto absolute lg:right-16 right-4 md:bottom-52 bottom-60" src={fillheart}/>
			<p className="font-bold pt-3 h-16">{name}</p>
			<span>${price}</span>
			<img className="pl-2 inline w-[20px] h-[20px] md:w-auto md:h-auto" src={star}/>
			<img className="pl-2 inline w-[20px] h-[20px] md:w-auto md:h-auto" src={star}/>
			<img className="pl-2 inline w-[20px] h-[20px] md:w-auto md:h-auto" src={star}/>
			<img className="pl-2 inline w-[20px] h-[20px] md:w-auto md:h-auto" src={star}/>
			<span className="pl-2">({size})</span>
			<button onClick={() => handleAddToCart({img, name, price})} className="block pt-2 rounded-md text-center text-white h-10 w-full bg-[#ff8000] mt-3 text-sm font-semibold pb-2 mb-8">ADD TO CART</button>
		</div>
	);
}

export default Product;