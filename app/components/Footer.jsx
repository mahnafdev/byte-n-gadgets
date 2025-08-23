const Footer = () => {
	return (
		<footer className="bg-zinc-950 px-32 py-8 flex flex-col items-center justify-center gap-y-4">
			<div
				id="foot-logo"
				className="flex items-center gap-x-2 group cursor-default"
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
			<p className="text-zinc-300 text-center">
				&copy; 2025 ByteNGadgets | All rights reserved
			</p>
		</footer>
	);
};

export default Footer;
