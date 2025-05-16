import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Learn Hub - 个人学习与技术分享",
	description: "记录个人学习、技术探索和知识沉淀的个人网站",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-CN">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="flex flex-col min-h-screen">
					<Navigation />
					<main className="flex-1">{children}</main>
					<footer className="border-t py-6 text-center text-sm text-gray-500">
						<div className="container mx-auto">
							© {new Date().getFullYear()} Learn Hub. All rights reserved.
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
