import Link from "next/link";

export default function Home() {
	const categories = [
		{
			title: "人工智能",
			description: "探索AI领域的前沿技术与实践应用",
			href: "/ai",
			topics: [
				{ name: "Python", href: "/ai/python" },
				{ name: "PyTorch", href: "/ai/pytorch" },
				{ name: "LangChain", href: "/ai/langchain" },
				{ name: "RAG", href: "/ai/rag" },
				{ name: "AI Agent", href: "/ai/agent" },
				{ name: "MCP", href: "/ai/mcp" },
			],
		},
		{
			title: "前端技术",
			description: "前端开发技术栈与最佳实践",
			href: "/frontend",
			topics: [
				{ name: "React", href: "/frontend/react" },
				{ name: "Vue", href: "/frontend/vue" },
				{ name: "Webpack", href: "/frontend/webpack" },
				{ name: "Next.js", href: "/frontend/nextjs" },
				{ name: "SSR", href: "/frontend/ssr" },
				{ name: "SEO", href: "/frontend/seo" },
			],
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			{/* Hero Section */}
			<section className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Learn Hub</h1>
				<p className="text-xl mb-8 max-w-3xl mx-auto">记录学习历程，分享技术心得，构建个人知识体系</p>
				<div className="flex justify-center gap-4">
					<Link
						href="/about"
						className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
					>
						了解更多
					</Link>
					<Link
						href="/ai"
						className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
					>
						浏览内容
					</Link>
				</div>
			</section>

			{/* Categories Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8 text-center">学习主题</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{categories.map((category) => (
						<div key={category.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-2xl font-bold mb-3">{category.title}</h3>
							<p className="text-gray-600 mb-4">{category.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{category.topics.map((topic) => (
									<Link
										key={topic.name}
										href={topic.href}
										className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
									>
										{topic.name}
									</Link>
								))}
							</div>
							<Link href={category.href} className="text-blue-600 font-medium hover:underline">
								查看全部 →
							</Link>
						</div>
					))}
				</div>
			</section>

			{/* Recent Updates Section */}
			<section>
				<h2 className="text-3xl font-bold mb-8 text-center">最近更新</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* 这里将来可以通过获取最近的文章或笔记来动态填充 */}
					<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
						<div className="bg-gray-100 h-48" />
						<div className="p-4">
							<div className="text-sm text-gray-500 mb-2">2023-10-15</div>
							<h3 className="text-xl font-bold mb-2">Next.js 应用路由深入解析</h3>
							<p className="text-gray-600 mb-3 line-clamp-3">
								探索 Next.js App Router 的工作原理及其优势，了解如何构建高性能的 SSR 应用...
							</p>
							<Link href="/frontend/nextjs" className="text-blue-600 font-medium hover:underline">
								继续阅读 →
							</Link>
						</div>
					</div>
					<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
						<div className="bg-gray-100 h-48" />
						<div className="p-4">
							<div className="text-sm text-gray-500 mb-2">2023-10-10</div>
							<h3 className="text-xl font-bold mb-2">LangChain 框架实战指南</h3>
							<p className="text-gray-600 mb-3 line-clamp-3">
								从基础概念到实践应用，掌握 LangChain 框架的核心功能和最佳实践...
							</p>
							<Link href="/ai/langchain" className="text-blue-600 font-medium hover:underline">
								继续阅读 →
							</Link>
						</div>
					</div>
					<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
						<div className="bg-gray-100 h-48" />
						<div className="p-4">
							<div className="text-sm text-gray-500 mb-2">2023-10-05</div>
							<h3 className="text-xl font-bold mb-2">打造高效 RAG 系统</h3>
							<p className="text-gray-600 mb-3 line-clamp-3">
								检索增强生成（RAG）系统的设计原理与实现方法，提升AI应用的准确性和可靠性...
							</p>
							<Link href="/ai/rag" className="text-blue-600 font-medium hover:underline">
								继续阅读 →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
