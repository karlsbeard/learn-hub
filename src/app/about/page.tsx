export default function About() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8 text-center">关于 Learn Hub</h1>

			<div className="max-w-3xl mx-auto">
				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4">网站简介</h2>
					<p className="text-lg mb-4">
						Learn Hub
						是我个人的学习笔记和技术博客网站，旨在记录我在技术探索和学习过程中的心得体会、实践经验和知识沉淀。
					</p>
					<p className="text-lg mb-4">
						本站采用 Next.js
						开发，通过服务端渲染和静态站点生成技术，为访问者提供快速、流畅的浏览体验。
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4">网站目的</h2>
					<ul className="list-disc pl-6 space-y-2 text-lg">
						<li>记录每日学习和技术探索的内容</li>
						<li>构建个人知识体系，促进深度思考</li>
						<li>分享技术经验，与志同道合者交流</li>
						<li>作为个人简历的补充，展示专业技能和学习能力</li>
						<li>实践 SSR、SSG 和 SEO 优化等前端技术</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4">学习领域</h2>
					<p className="text-lg mb-4">目前主要关注两大技术领域：</p>
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-semibold mb-2">人工智能</h3>
							<p className="text-lg">
								包括 Python 编程、PyTorch 深度学习框架、LangChain
								应用开发、检索增强生成（RAG）、AI Agent
								及大规模内容处理（MCP）等技术。
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">前端技术</h3>
							<p className="text-lg">
								涵盖 React、Vue 等主流框架，Webpack 构建工具，Next.js
								全栈框架，以及服务端渲染（SSR）和搜索引擎优化（SEO）等技术实践。
							</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-bold mb-4">关于我</h2>
					<p className="text-lg mb-4">
						我是一名热爱技术、热衷学习的开发者。对新技术充满好奇，愿意投入时间深入研究和实践。
						通过这个网站，我希望能够记录自己的成长历程，也希望能够帮助到其他正在学习这些技术的朋友。
					</p>
					<p className="text-lg">如果你有任何问题或建议，欢迎与我联系交流。</p>
				</section>
			</div>
		</div>
	);
}
