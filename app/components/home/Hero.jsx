import Link from "next/link";

const Hero = () => {
	return (
		<section
			id="hero"
			className="grid grid-cols-2 items-center gap-x-16"
		>
			{/* Textual Content */}
			<div
				id="hero-content"
				className="space-y-5"
			>
				{/* Slogan */}
				<h1 className="text-5xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
					From tiny <span className="text-primary">bytes</span> to smart{" "}
					<span className="text-secondary">gadgets</span> – empowering your world
				</h1>
				{/* Subtext */}
				<p className="text-lg">
					Discover cutting-edge gadgets designed to simplify your daily life. From
					daily devices to futuristic gadgets. Your world deservers more than just
					ordinary tech.
				</p>
				{/* Call-To-Action button */}
				<Link href="/gadgets">
					<button
						type="button"
						className="text-2xl font-medium px-5 py-2 bg-primary rounded-lg cursor-pointer hover:bg-primary/90 active:scale-95 transition-[background-color,scale] duration-250"
					>
						Explore Gadgets
					</button>
				</Link>
			</div>
			{/* Images */}
			<div
				id="hero-images"
				className="flex items-center justify-center w-full h-116 group"
			>
				<img
					src="/hero-image-1.jpg"
					alt="Image 1"
					className="w-1/2 h-full object-cover rounded-l-xl group-hover:w-3/4 transition-[width] duration-900"
				/>
				<img
					src="/hero-image-2.jpg"
					alt="Image 2"
					className="w-1/2 h-full object-cover rounded-r-xl"
				/>
			</div>
		</section>
	);
};

export default Hero;
