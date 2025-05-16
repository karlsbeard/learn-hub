"use client";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ name: "首页", href: "/" },
		{
			name: "人工智能",
			href: "/ai",
			submenu: [
				{ name: "Python", href: "/ai/python" },
				{ name: "PyTorch", href: "/ai/pytorch" },
				{ name: "LangChain", href: "/ai/langchain" },
				{ name: "RAG", href: "/ai/rag" },
				{ name: "AI Agent", href: "/ai/agent" },
				{ name: "MCP", href: "/ai/mcp" },
			],
		},
		{
			name: "前端技术",
			href: "/frontend",
			submenu: [
				{ name: "React", href: "/frontend/react" },
				{ name: "Vue", href: "/frontend/vue" },
				{ name: "Webpack", href: "/frontend/webpack" },
				{ name: "Next.js", href: "/frontend/nextjs" },
				{ name: "SSR", href: "/frontend/ssr" },
				{ name: "SEO", href: "/frontend/seo" },
			],
		},
		{ name: "关于", href: "/about" },
	];

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav className="border-b">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="font-bold text-xl">
							Learn Hub
						</Link>
					</div>

					{/* Desktop navigation */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navItems.map((item) => (
							<div key={item.name} className="relative group">
								<Link href={item.href} className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
									{item.name}
								</Link>
								{item.submenu && (
									<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
										<div className="py-1">
											{item.submenu.map((subItem) => (
												<Link
													key={subItem.name}
													href={subItem.href}
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												>
													{subItem.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="flex md:hidden items-center">
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMobileMenu}
						>
							<span className="sr-only">打开导航菜单</span>
							{mobileMenuOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<div key={item.name}>
								<Link
									href={item.href}
									className="block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 transition-colors"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
								{item.submenu && (
									<div className="pl-4 space-y-1">
										{item.submenu.map((subItem) => (
											<Link
												key={subItem.name}
												href={subItem.href}
												className="block px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
												onClick={() => setMobileMenuOpen(false)}
											>
												{subItem.name}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
