import { useState, useEffect } from "react";
import Product from "./Product";
import mendress2 from "../img/products/mendress2.png"
import star from "../img/products/star.png"
import productService from "../services/products"

const ProductBody = ({ handleMoreProducts, handleAddToCart }) => {
    const [items, setItems] = useState([])
    const [productsDetail, setProductsDetail] = useState([])

    useEffect(() => {
        productService.getProducts().then(res => setItems(res.items))
    }, [])
    const products = items.map(item => {
        return {
            "name": item.name,
            "url": `https://api.timbu.cloud/images/${item.photos[0].url}`,
            "price": item.current_price[0].LRD[0],
            "size": item.available_quantity,
            "id": item.unique_id
        }
    })

	return (
		<div className="w-[80%] mx-auto">
			<div>
				<h1 className="font-bold text-xl md:text-3xl">Our Products</h1>
				<p className="text-[#979797] md:w-1/3 mt-1">Our fashion brand offers a range of personalized services to enhance your shopping experience. From expert styling advice to custom tailoring, we are here to help you look and feel your best.</p>
			</div>
			<p className="md:hidden font-semibold text-xl text-right py-8">Filters <span className="text-[#d7d7d7] underline text-sm pl-2">Clear filters</span></p>
			<div className="md:grid md:grid-cols-4 md:grid-rows-1 md:pt-16">
			<div className="hidden md:block">
				<p className="font-semibold text-xl">Filters</p>
				<p className="font-bold text-sm pt-3 pb-2">Categories</p>
				<input type="checkbox" id="all" className="accent-black w-5 h-5 mr-2" defaultChecked/><label htmlFor="all">All</label><br />
				<input type="checkbox" id="women" className="accent-black w-5 h-5 mr-2"/><label htmlFor="women">Women's Wear</label><br />
				<input type="checkbox" id="men" className="accent-black w-5 h-5 mr-2"/><label htmlFor="men">Men's Wear</label><br />
				<input type="checkbox" id="menaccessory" className="accent-black w-5 h-5 mr-2"/><label htmlFor="menaccessory">Men's Accessories</label><br />
				<input type="checkbox" id="womenaccessory" className="accent-black w-5 h-5 mr-2"/><label htmlFor="womenaccessory">Women's Accessories</label>
			</div>
			<div className="md:col-span-3 grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 gap-2">
                {products.map(({ id, name, url, price, size }) => <Product key={id} img={url} name={name} price={price} size={size} handleAddToCart={handleAddToCart} imgNo={1}/>)}
				<div className="md:hidden">
                    <Product img={mendress2} name={"Mens Dress Shirts Long Sleeve Business"} price={"68"} handleAddToCart={handleAddToCart} imgNo={10}/>
				</div>
			</div>
		</div>
		<div className="flex justify-center items-center">
			<button onClick={handleMoreProducts} className="border-2 border-[#ff8000] bg-red text-[#ff8000] font-semibold py-2 px-12 md:my-20 lg:w-1/4 self-center hover:bg-[#ff8000] hover:text-black">Load More Products</button>
		</div>
	</div>

	);
}

export default ProductBody;