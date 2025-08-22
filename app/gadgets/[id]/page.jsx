"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";

const GadgetDetails = ({ params }) => {
	const { id } = use(params);
	// Gadget data state
	const [gadget, setGadget] = useState({});
	// Fetch gadgets data
	useEffect(() => {
		axios
			.get(`http://localhost:5100/gadgets/${id}`)
			.then((res) => {
				// On successful GET
				setGadget(res.data);
			})
			.catch((error) => {
				// On error
				console.log(`Axios Error: ${error.message}`);
			});
	}, []);
	// Destructure gadget data
	const { _id, name, image, category, price, brand, model, stock, description } = gadget;
	return (
		<section className="flex items-center justify-between gap-x-16">
			{/* Content */}
			<div className="w-3/5 space-y-6">
				{/* Name */}
				<h2 className="text-4xl font-semibold">{name}</h2>
				<div className="flex flex-wrap gap-1.5">
					{/* Category */}
					<span className="px-3 py-1 bg-zinc-800 border border-secondary/50 rounded-full">
						<span className="font-semibold">Category:</span> {category}
					</span>
					{/* Stock */}
					<span className="px-3 py-1 bg-zinc-800 border border-secondary/50 rounded-full">
						<span className="font-semibold">Availability:</span>{" "}
						{stock ? "In Stock" : "Out of Stock"}
					</span>
					{/* Price */}
					<span className="px-3 py-1 bg-zinc-800 border border-secondary/50 rounded-full">
						<span className="font-semibold">Price:</span> ${price}
					</span>
					{/* Brand */}
					<span className="px-3 py-1 bg-zinc-800 border border-secondary/50 rounded-full">
						<span className="font-semibold">Brand:</span> {brand}
					</span>
					{/* Model */}
					<span className="px-3 py-1 bg-zinc-800 border border-secondary/50 rounded-full">
						<span className="font-semibold">Model:</span> {model}
					</span>
				</div>
				{/* Description */}
				<p className="text-justify">{description}</p>
			</div>
			{/* Thumbnail Image */}
			<div className="w-125 h-125 rounded-[1.25rem] overflow-hidden hover:shadow-[0.35rem_0.35rem_0_0,-0.35rem_-0.35rem_0_0] hover:shadow-primary/75 transition-shadow duration-300">
				<img
					src={image}
					alt="Gadget Image"
					className="w-full h-full object-cover rounded-[1.25rem] hover:scale-120 transition-transform duration-300"
				/>
			</div>
		</section>
	);
};

export default GadgetDetails;
