"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "../GadgetCard";

const GadgetHighlights = () => {
	// Gadgets data state
	const [gadgets, setGadgets] = useState([]);
	// Fetch gadgets data
	useEffect(() => {
		axios
			.get("http://localhost:5100/gadgets?limit=4")
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
		<section
			id="gadget-highlights"
			className="space-y-10"
		>
			<div className="space-y-2">
				{/* Section Header */}
				<h2 className="text-4xl font-semibold text-center text-primary">
					Gadget Highlights
				</h2>
				{/* Section Subtext */}
				<p className="text-lg text-center">
					Highlights of our gadgets. View & Get your desired Gadget.
				</p>
			</div>
			{/* Display Gadgets in Grid layout */}
			<div
				id="gadget-highlights-grid"
				className="grid grid-cols-4 gap-4 place-self-center"
			>
				{gadgets?.map((gadget) => (
					<GadgetCard
						key={gadget._id}
						gadget={gadget}
					/>
				))}
			</div>
		</section>
	);
};

export default GadgetHighlights;
