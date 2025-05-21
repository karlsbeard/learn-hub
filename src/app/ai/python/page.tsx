import Link from "next/link";

export default function PythonPage() {
	const pythonArticles = [
		{
			title: "Python基础知识回顾",
			date: "2023-09-20",
			summary: "对Python语言核心概念的全面回顾，包括变量、数据类型、控制流、函数和类等基础知识点。",
		},
		{
			title: "Python高级特性与用法",
			date: "2023-09-25",
			summary: "深入探讨Python的高级特性，包括装饰器、生成器、上下文管理器、元类等进阶概念。",
		},
		{
			title: "数据处理利器：Pandas实战",
			date: "2023-10-05",
			summary: "学习使用Pandas库进行高效数据处理，包括数据清洗、转换、聚合和分析等常用操作。",
		},
		{
			title: "科学计算基础：NumPy详解",
			date: "2023-10-12",
			summary: "掌握NumPy库的核心功能，理解数组操作、广播机制、向量化计算等科学计算基础。",
		},
		{
			title: "机器学习入门：Scikit-learn实践",
			date: "2023-10-18",
			summary: "使用Scikit-learn库实现基础机器学习算法，包括分类、回归、聚类和降维等任务。",
		},
	];

	const codeSnippets = [
		{
			title: "装饰器示例",
			code: `def timing_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"函数 {func.__name__} 执行时间: {end_time - start_time:.4f} 秒")
        return result
    return wrapper

@timing_decorator
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

result = calculate_fibonacci(30)  # 测试装饰器`,
		},
		{
			title: "Pandas数据分析示例",
			code: `import pandas as pd
import matplotlib.pyplot as plt

# 创建示例数据
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七'],
    '年龄': [25, 30, 35, 40, 45],
    '收入': [5000, 6000, 7000, 8000, 9000],
    '学历': ['本科', '硕士', '博士', '本科', '硕士']
}

# 创建DataFrame
df = pd.DataFrame(data)

# 基本统计分析
print(df.describe())

# 按学历分组计算平均收入和年龄
grouped = df.groupby('学历').agg({
    '收入': 'mean',
    '年龄': 'mean'
})
print(grouped)

# 可视化展示
plt.figure(figsize=(10, 6))
plt.bar(df['姓名'], df['收入'])
plt.title('收入分布')
plt.xlabel('姓名')
plt.ylabel('收入')
plt.show()`,
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mb-8">
				<Link href="/ai" className="text-blue-600 hover:underline inline-flex items-center">
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
					返回人工智能首页
				</Link>
			</div>

			<h1 className="text-4xl font-bold mb-6">Python 学习笔记</h1>
			<p className="text-xl mb-10">
				Python是AI和数据科学领域的主要编程语言，这里记录了我在学习Python过程中的心得和实践经验。
			</p>

			<div className="grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2">
					<h2 className="text-2xl font-bold mb-6">最新文章</h2>
					<div className="space-y-8">
						{pythonArticles.map((article) => (
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
										href="https://docs.python.org/zh-cn/3/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Python官方文档
									</a>
								</li>
								<li>
									<a
										href="https://pandas.pydata.org/docs/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Pandas文档
									</a>
								</li>
								<li>
									<a
										href="https://numpy.org/doc/stable/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										NumPy文档
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
