const CartItem = ( { img, price, name } ) => {
    return (
        <div className="flex mr-5 lg:mr-0">
			<img src={img} alt="women's watch" className="w-[40%] h-[40%] sm:w-[10%] sm:h-[10%] md:w-[23%] md:h-[23%] mr-2"/>
			<div>
				<p className="font-bold text-lg">{name}</p>
				<p className="text-sm">Size: L</p>
    			<div className="flex justify-between">
                    <p className="text-sm">Quantity: 1</p>
                    <button className="underline text-sm">Add</button>
                </div>
	    		<div className="flex justify-between">
                    <p className="font-bold text-lg">{price}</p>
                    <button className="underline text-sm">Remove</button>
                </div>
		    </div>
		</div>
    );
}


export default CartItem;