"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddGadget = () => {
	const router = useRouter();
	// Handle form submit and gadget creation
	const handleAdd = (e) => {
		// Prevent the page from reloading after form submission
		e.preventDefault();
		// Access and extract the form submission data
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		// Refine existing data and add extra necessary data
		data.price = parseInt(data.price);
		data.stock = data.stock === "on" ? true : false;
		data.created_at = new Date().toLocaleDateString();
		// Send data to server
		axios
			.post("http://localhost:5100/gadgets", data)
			.then((res) => {
				// Check if success
				if (res.status === 201) {
					// Reset form and redirect
					e.target.reset();
					router.push("/gadgets");
				}
			})
			.catch((error) => {
				console.log(`Axios Error: ${error.message}`);
			});
	};
	return (
		<>
			{/* Page header */}
			<h1 className="text-5xl font-semibold text-center text-primary mb-12">
				Add A Gadget
			</h1>
			{/* Form */}
			<form
				className="max-w-3xl mx-auto space-y-4"
				onSubmit={handleAdd}
			>
				{/* Name */}
				<label className="flex items-center gap-2">
					<span className="text-lg">Name:</span>
					<input
						type="text"
						name="name"
						placeholder="Gadget Name"
						className="w-full px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
						maxLength={50}
						required
					/>
				</label>
				{/* Image */}
				<label className="flex items-center gap-2">
					<span className="text-lg">Image:</span>
					<input
						type="url"
						name="image"
						placeholder="Gadget Image Link"
						className="w-full px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
						required
					/>
				</label>
				<div className="flex items-center justify-between gap-x-4">
					{/* Category */}
					<label className="w-fit flex items-center gap-2">
						<span className="text-lg">Category:</span>
						<select
							name="category"
							className="w-64 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
							required
						>
							<option value="Desktop">Desktop</option>
							<option value="Laptop">Laptop</option>
							<option value="Monitor">Monitor</option>
							<option value="Mobile Phone">Mobile Phone</option>
							<option value="Tablet">Tablet</option>
							<option value="Smartwatch">Smartwatch</option>
							<option value="Office Equipment">Office Equipment</option>
							<option value="Keyboard">Keyboard</option>
							<option value="Mouse & Mouse Pad">Mouse & Mouse Pad</option>
							<option value="Speaker">Speaker</option>
							<option value="Microphone">Microphone</option>
							<option value="Earphones & Earbuds">Earphones & Earbuds</option>
							<option value="Webcam">Webcam</option>
							<option value="Gaming Chair">Gaming Chair</option>
							<option value="Gaming Console">Gaming Console</option>
						</select>
					</label>
					{/* Price */}
					<label className="w-fit flex items-center gap-2">
						<span className="text-lg">Price (USD):</span>
						<input
							type="number"
							name="price"
							placeholder="Price in USD"
							className="w-40 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
							max={9999}
							min={0}
							required
						/>
					</label>
				</div>
				<div className="flex items-center justify-between gap-x-4">
					{/* Brand */}
					<label className="flex items-center gap-2">
						<span className="text-lg">Brand:</span>
						<input
							type="text"
							name="brand"
							placeholder="Gadget Brand"
							className="w-72 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
							maxLength={15}
							required
						/>
					</label>
					{/* Model */}
					<label className="flex items-center gap-2">
						<span className="text-lg">Model:</span>
						<input
							type="text"
							name="model"
							placeholder="Gadget Model"
							className="w-72 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none hover:border-secondary/50 focus:border-primary/50"
							maxLength={30}
							required
						/>
					</label>
				</div>
				{/* Stock */}
				<label className="w-fit flex items-center gap-2">
					<input
						type="checkbox"
						name="stock"
						defaultChecked
						className="size-4"
					/>
					<span className="text-lg">In Stock</span>
				</label>
				{/* Description */}
				<label className="flex gap-2">
					<span className="text-lg">Description:</span>
					<textarea
						name="description"
						rows={10}
						placeholder="Details about the Gadget"
						className="w-full resize-none px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none hover:border-secondary/50 focus:border-primary/50"
						maxLength={750}
						required
					/>
				</label>
				<div className="mt-8 flex justify-center">
					<button
						type="submit"
						className="text-xl font-medium w-48 py-2 rounded-lg bg-primary cursor-pointer hover:bg-primary/90 active:scale-95 transition-[background-color,scale]"
					>
						Proceed
					</button>
				</div>
			</form>
		</>
	);
};

export default AddGadget;
