import Link from "next/link";

const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="fixed top-0 left-0 right-0 z-[9999] px-32 py-4 bg-zinc-900/85 backdrop-blur-md flex items-center justify-between border-b border-b-zinc-800"
		>
			{/* Logo */}
			<Link href="/">
				<div
					id="nav-logo"
					className="flex items-center gap-x-2 group hover:scale-105 transition-transform duration-200"
				>
					{/* Logo Image */}
					<img
						src="/logo.png"
						alt="Logo Image"
						className="w-13"
					/>
					{/* Logo Title/Text */}
					<h4 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-blue-200 to-orange-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-orange-300 transition-colors duration-200">
						ByteNGadgets
					</h4>
				</div>
			</Link>
			{/* Nav Links */}
			<ul
				id="nav-links"
				className="flex items-center gap-x-2 text-xl"
			>
				{/* Home */}
				<li>
					<Link
						href="/"
						className="px-3 py-1.5 rounded-md hover:bg-foreground/10 active:bg-zinc-700/80 transition-colors duration-200"
					>
						Home
					</Link>
				</li>
				{/* Gadgets */}
				<li>
					<Link
						href="/gadgets"
						className="px-3 py-1.5 rounded-md hover:bg-foreground/10 active:bg-zinc-700/80 transition-colors duration-200"
					>
						Gadgets
					</Link>
				</li>
			</ul>
			{/* Nav Buttons */}
			<div id="nav-buttons">
				<Link href="/login">
					<button
						type="button"
						className="text-lg px-4 py-1.5 rounded-md bg-primary cursor-pointer hover:bg-primary/90 active:scale-95 transition-[background-color,scale]"
					>
						Login
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
