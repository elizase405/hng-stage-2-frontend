const Address = ({ handleClick }) => {
    return (
        <div class="flex flex-col md:flex-row md:flex-wrap">
			<div>
				<p className="text-lg mb-4">Shipping Information</p>
				<input className="outline-none w-1/2 md:w-2/5 p-2 pl-4 border border-[#909090] md:mr-2 md:bg-[#eff2f6]" type="text" placeholder="Michelle"/>
				<input className="outline-none w-1/2 md:w-2/5 p-2 pl-4 border border-[#909090] mb-2 md:bg-[#eff2f6]" type="text" type="text" placeholder="Urphazin"/><br />
				<input className="outline-none w-full md:w-4/5 p-2 pl-4 border border-[#909090] mb-2 md:bg-[#eff2f6]" type="text" type="text" placeholder="49 FeatherStone Street, ECIY 8SY, United Kingdom"/><br />
				<input className="outline-none w-full md:w-4/5 p-2 pl-4 border border-[#909090] mb-2 md:bg-[#eff2f6]" type="text" placeholder="Apartment"/><br />
				<input className="outline-none w-full md:w-4/5 p-2 pl-4 border border-[#909090] mb-2 md:bg-[#eff2f6]" type="text" placeholder="United Kingdom"/><br />
				<select className="outline-none w-1/2 md:w-2/5 p-2 pl-4 border border-[#909090] mb-2 bg-[#fff] md:bg-[#eff2f6] h-11" name="state">
					<option value="london">London</option>
					<option value="london">Lagos</option>
					<option value="london">Nairobi</option>
					<option value="london">Accra</option>
					<option value="london">Others</option>
				</select>
				<input className="outline-none w-1/2 md:w-2/5 p-2 pl-4 border border-[#909090] mb-2 md:ml-2 md:bg-[#eff2f6]" type="text" placeholder="ECIY 8SY"/><br />
				<input className="outline-none md:w-4/5 p-2 pl-4 border border-[#909090] mb-2 w-full md:bg-[#eff2f6]" type="text" placeholder="Optional"/><br />
				<input className="accent-black w-5 h-5 mr-2 mt-4 mb-6" id="saveInfo" type="checkbox" defaultChecked/><label htmlFor="saveInfo" className="text-[#979797]">Save contact information</label>
				<button onClick={handleClick} className="w-full block pt-2 mt-10 text-center text-white h-12 w-5/5 md:w-4/5 bg-[#ff8000] mt-3 text-sm font-semibold pb-2 mb-10">Continue to shipping</button>
			</div>
		</div>
    );
}

export default Address;