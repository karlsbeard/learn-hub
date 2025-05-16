import Link from "next/link";

export default function NextjsPage() {
	const nextjsArticles = [
		{
			title: "Next.js 应用路由深入解析",
			date: "2023-10-15",
			summary: "探索 Next.js App Router 的工作原理及其优势，了解如何构建高性能的 SSR 应用。",
		},
		{
			title: "Next.js 中的数据获取策略",
			date: "2023-10-08",
			summary: "比较 Next.js 中不同的数据获取方法，包括服务器组件、客户端组件和混合渲染策略。",
		},
		{
			title: "使用 Next.js 构建全栈应用",
			date: "2023-09-30",
			summary: "学习如何利用 Next.js API 路由和服务器组件构建完整的全栈应用，无需额外后端框架。",
		},
		{
			title: "Next.js 性能优化实践",
			date: "2023-09-22",
			summary: "探讨 Next.js 应用的性能优化技术，包括图片优化、代码分割、静态生成和增量静态再生成。",
		},
	];

	const codeSnippets = [
		{
			title: "Next.js 服务器组件数据获取",
			code: `// app/products/page.tsx
// 这是一个服务器组件，可以直接进行异步数据获取
export default async function ProductsPage() {
  // 数据获取（在服务器端执行）
  const products = await fetch('https://api.example.com/products', {
    cache: 'no-store' // 不缓存，每次请求都获取最新数据
  }).then(res => res.json())
  
  return (
    <div>
      <h1>产品列表</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ¥{product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}`,
		},
		{
			title: "Next.js API 路由示例",
			code: `// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // 连接数据库或其他数据源
  const products = [
    { id: 1, name: '产品A', price: 99 },
    { id: 2, name: '产品B', price: 199 },
    { id: 3, name: '产品C', price: 299 },
  ];
  
  // 返回JSON响应
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // 处理新产品创建
  console.log('创建新产品:', body);
  
  // 返回成功响应
  return NextResponse.json(
    { success: true, message: '产品创建成功' },
    { status: 201 }
  );
}`,
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mb-8">
				<Link href="/frontend" className="text-blue-600 hover:underline inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-1"
						aria-hidden="true"
					>
						<path d="m15 18-6-6 6-6" />
					</svg>
					返回前端技术首页
				</Link>
			</div>

			<h1 className="text-4xl font-bold mb-6">Next.js 学习笔记</h1>
			<p className="text-xl mb-10">
				Next.js 是一个面向生产环境的 React 框架，它结合了服务端渲染、静态站点生成、API
				路由等强大功能，这里记录了我学习和使用 Next.js 的经验。
			</p>

			<div className="grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2">
					<h2 className="text-2xl font-bold mb-6">最新文章</h2>
					<div className="space-y-8">
						{nextjsArticles.map((article) => (
							<div key={article.title} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
								<h3 className="text-xl font-bold mb-2">{article.title}</h3>
								<div className="text-sm text-gray-500 mb-3">{article.date}</div>
								<p className="text-gray-700 mb-4">{article.summary}</p>
								<Link href="#" className="text-blue-600 font-medium hover:underline">
									阅读全文 →
								</Link>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className="sticky top-4">
						<h2 className="text-2xl font-bold mb-6">实用代码片段</h2>
						<div className="space-y-6">
							{codeSnippets.map((snippet) => (
								<div key={snippet.title} className="border rounded-lg overflow-hidden">
									<div className="bg-gray-100 px-4 py-2 font-medium">{snippet.title}</div>
									<pre className="bg-gray-800 text-gray-100 p-4 overflow-x-auto text-sm">
										<code>{snippet.code}</code>
									</pre>
								</div>
							))}
						</div>

						<div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
							<h3 className="font-bold text-lg mb-2">学习资源推荐</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="https://nextjs.org/docs"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Next.js 官方文档
									</a>
								</li>
								<li>
									<a
										href="https://nextjs.org/learn"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Next.js 学习课程
									</a>
								</li>
								<li>
									<a
										href="https://github.com/vercel/next.js/tree/canary/examples"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Next.js 示例项目
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
