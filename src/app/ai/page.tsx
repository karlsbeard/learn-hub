import Link from "next/link";

export default function AIHome() {
	const aiTopics = [
		{
			title: "Python",
			description: "Python基础、高级特性、数据处理和机器学习应用",
			href: "/ai/python",
			icon: "🐍",
		},
		{
			title: "PyTorch",
			description: "深度学习框架、模型构建、训练技巧和部署实践",
			href: "/ai/pytorch",
			icon: "🔥",
		},
		{
			title: "LangChain",
			description: "大型语言模型应用开发框架和最佳实践",
			href: "/ai/langchain",
			icon: "⛓️",
		},
		{
			title: "RAG",
			description: "检索增强生成系统设计与实现",
			href: "/ai/rag",
			icon: "🔍",
		},
		{
			title: "AI Agent",
			description: "智能代理开发、多代理系统和自主AI应用",
			href: "/ai/agent",
			icon: "🤖",
		},
		{
			title: "MCP",
			description: "大规模内容处理技术与内容理解系统",
			href: "/ai/mcp",
			icon: "📊",
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-4 text-center">人工智能学习笔记</h1>
			<p className="text-xl mb-12 text-center max-w-3xl mx-auto">
				探索AI领域的前沿技术与实践应用，从基础知识到高级实践
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{aiTopics.map((topic) => (
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
				<h2 className="text-2xl font-bold mb-4">学习路线推荐</h2>
				<ol className="list-decimal pl-6 space-y-3">
					<li>从 Python 基础开始，掌握数据处理、科学计算和基础机器学习库的使用</li>
					<li>学习 PyTorch 框架，理解深度学习模型的构建、训练和优化方法</li>
					<li>探索 LangChain 和 RAG 技术，构建基于大型语言模型的智能应用</li>
					<li>掌握 AI Agent 开发，实现更复杂的智能系统和自主决策能力</li>
					<li>研究 MCP 技术，处理和理解大规模内容数据</li>
				</ol>
			</div>
		</div>
	);
}
