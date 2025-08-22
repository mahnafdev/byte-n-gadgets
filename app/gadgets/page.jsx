"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "../components/GadgetCard";

const Gadgets = () => {
	// Gadgets data state
	const [gadgets, setGadgets] = useState([]);
	// Fetch gadgets data
	useEffect(() => {
		axios
			.get("http://localhost:5100/gadgets")
			.then((res) => {
				// On successful GET
				setGadgets(res.data);
			})
			.catch((error) => {
				// On error
				console.log(`Axios Error: ${error.message}`);
			});
	}, []);
	return (
		<>
			{/* Page Header */}
			<h1 className="text-5xl font-semibold text-center text-primary mb-12">
				All Gadgets
			</h1>
			{/* Display Gadgets in Grid layout */}
			<div className="grid grid-cols-4 gap-5 place-self-center">
				{gadgets?.map((gadget) => (
					<GadgetCard
						key={gadget._id}
						gadget={gadget}
					/>
				))}
			</div>
		</>
	);
};

export default Gadgets;
