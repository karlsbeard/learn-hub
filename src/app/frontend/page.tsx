import Link from "next/link";

export default function FrontendHome() {
	const frontendTopics = [
		{
			title: "React",
			description: "React框架基础、Hooks、状态管理和性能优化",
			href: "/frontend/react",
			icon: "⚛️",
		},
		{
			title: "Vue",
			description: "Vue框架生态、组件设计和最佳实践",
			href: "/frontend/vue",
			icon: "🟩",
		},
		{
			title: "Webpack",
			description: "模块打包、配置优化和构建流程管理",
			href: "/frontend/webpack",
			icon: "📦",
		},
		{
			title: "Next.js",
			description: "服务端渲染框架、应用路由和全栈开发",
			href: "/frontend/nextjs",
			icon: "▲",
		},
		{
			title: "SSR",
			description: "服务端渲染原理、实现方法和性能优化",
			href: "/frontend/ssr",
			icon: "🖥️",
		},
		{
			title: "SEO",
			description: "搜索引擎优化技巧、元标签和结构化数据",
			href: "/frontend/seo",
			icon: "🔍",
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-4 text-center">前端技术笔记</h1>
			<p className="text-xl mb-12 text-center max-w-3xl mx-auto">
				前端开发技术栈与最佳实践，从框架基础到高级应用
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{frontendTopics.map((topic) => (
					<Link
						href={topic.href}
						key={topic.title}
						className="border rounded-lg p-6 hover:shadow-lg transition-shadow block"
					>
						<div className="text-4xl mb-4">{topic.icon}</div>
						<h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
						<p className="text-gray-600">{topic.description}</p>
					</Link>
				))}
			</div>

			<div className="mt-16 bg-gray-50 rounded-lg p-8">
				<h2 className="text-2xl font-bold mb-4">前端学习路线</h2>
				<ol className="list-decimal pl-6 space-y-3">
					<li>掌握 React 或 Vue 框架基础，理解组件化开发和状态管理</li>
					<li>学习 Webpack 等构建工具，优化前端资源加载和开发流程</li>
					<li>深入研究 Next.js 框架，实践服务端渲染和静态站点生成</li>
					<li>理解 SSR 原理和实现方法，提升应用性能和用户体验</li>
					<li>掌握 SEO 优化技术，提高网站在搜索引擎中的可见性</li>
				</ol>
			</div>
		</div>
	);
}
