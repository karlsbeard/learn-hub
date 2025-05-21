import type { Post } from "@/types/db";

// 模拟数据库中的文章数据
const posts: Post[] = [
	{
		id: "1",
		title: "Next.js 入门指南",
		slug: "nextjs-getting-started",
		content: "# Next.js 入门\n\nNext.js 是一个 React 框架...",
		excerpt: "Next.js 是一个用于构建 Web 应用的 React 框架，提供了诸多生产级特性。",
		category: "frontend",
		tags: ["next.js", "react", "javascript"],
		publishedAt: new Date("2023-05-15"),
		updatedAt: new Date("2023-06-20"),
		author: {
			id: "1",
			name: "KarlsBeard",
			avatar: "/avatars/author.jpg",
		},
	},
	{
		id: "2",
		title: "Python 机器学习基础",
		slug: "python-machine-learning-basics",
		content: "# Python 机器学习基础\n\n机器学习是人工智能的一个分支...",
		excerpt: "本文介绍 Python 中常用的机器学习库及基本概念",
		category: "ai",
		tags: ["python", "machine-learning", "ai"],
		publishedAt: new Date("2023-07-10"),
		updatedAt: new Date("2023-07-10"),
		author: {
			id: "1",
			name: "KarlsBeard",
			avatar: "/avatars/author.jpg",
		},
	},
];

/**
 * 获取所有文章
 */
export async function getAllPosts(): Promise<Post[]> {
	// 在实际应用中，这里会从数据库获取数据
	return posts;
}

/**
 * 通过ID获取文章
 */
export async function getPostById(id: string): Promise<Post | null> {
	const post = posts.find((p) => p.id === id);
	return post || null;
}

/**
 * 通过slug获取文章
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
	const post = posts.find((p) => p.slug === slug);
	return post || null;
}

/**
 * 按分类获取文章
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
	return posts.filter((p) => p.category === category);
}

/**
 * 创建新文章
 */
export async function createPost(post: Omit<Post, "id">): Promise<Post> {
	const newPost: Post = {
		...post,
		id: `${posts.length + 1}`, // 在实际应用中这会由数据库生成
	};

	// 在实际应用中，这里会将文章保存到数据库
	posts.push(newPost);

	return newPost;
}
