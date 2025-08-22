import { TagIcon } from "lucide-react";
import Link from "next/link";

const GadgetCard = ({ gadget }) => {
	const { _id, name, image, category, price, stock } = gadget;
	return (
		<div className="w-sm bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg shadow-zinc-950/25 hover:shadow-none transition-shadow duration-250">
			{/* Image */}
			<div className="w-full h-72 rounded-t-2xl overflow-hidden">
				<img
					src={image}
					alt="Gadget Image"
					className="w-full h-full rounded-t-2xl object-cover hover:scale-115 transition-transform duration-300"
				/>
			</div>
			{/* Content */}
			<div className="m-5 space-y-3">
				{/* Gadget Name */}
				<h5 className="text-xl font-semibold line-clamp-1">{name}</h5>
				{/* Category */}
				<span
					className="w-fit flex items-center gap-x-2 px-3 py-1 bg-zinc-800 rounded-full"
					title="Category"
				>
					<TagIcon size={16} />
					{category}
				</span>
				{/* Price and Stock */}
				<div className="flex gap-1">
					<span className="text-lg text-secondary py-1.5 w-2/5 border border-secondary rounded-md grid place-items-center">
						${price}
					</span>
					<span
						className={`text-lg py-1.5 w-3/5 rounded-md grid place-items-center border ${
							stock
								? "border-green-700 text-green-300"
								: "border-red-700 text-red-300"
						}`}
					>
						{stock ? "In Stock" : "Out of Stock"}
					</span>
				</div>
				{/* Details button */}
				<Link
					href={`/gadgets/${_id}`}
					target="_blank"
				>
					<button
						type="button"
						className="w-full py-2 text-lg font-medium bg-primary rounded-lg cursor-pointer hover:bg-primary/90 active:rounded-md transition-[background-color,border-radius]"
					>
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default GadgetCard;
