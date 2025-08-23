import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AuthSessionProvider from "./providers/AuthSessionProvider";
import Footer from "./components/Footer";

// Initialize Geist font-family
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

// Define metadata like Title, Description
export const metadata = {
	title: "ByteNGadgets",
	description: "A Gadgets & Electronics App. Built by Ahnaf with Next.js.",
};

export default function RootLayout({ children: page }) {
	return (
		<html lang="en">
			<AuthSessionProvider>
				<body className={`scheme-dark ${geistSans.variable} antialiased`}>
					<header>
						<Navbar />
					</header>
					<main className="p-32 space-y-32">{page}</main>
					<Footer />
				</body>
			</AuthSessionProvider>
		</html>
	);
}
