import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata = {
	title: "ByteNGadgets",
	description: "A Gadgets & Electronics App. Built by Ahnaf with Next.js.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
