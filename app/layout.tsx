import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GCP Static Showcase - Cloud Architecture Demo",
	description:
		"A live demonstration of a secure, fast, and cost-efficient static website built on Google Cloud Platform. Experience modern cloud hosting best practices.",
	keywords: [
		"GCP",
		"Google Cloud Platform",
		"Static Website",
		"Cloud Architecture",
		"CDN",
		"Cloud Storage",
		"Cloud Armor",
	],
	authors: [{ name: "Jaron Schoorlemmer" }],
	openGraph: {
		title: "GCP Static Showcase - Cloud Architecture Demo",
		description:
			"Experience speed & security: A live demo of GCP-powered static hosting",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
