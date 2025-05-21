/**
 * 作者类型
 */
export interface Author {
	id: string;
	name: string;
	avatar: string;
	bio?: string;
	email?: string;
}

/**
 * 文章类型
 */
export interface Post {
	id: string;
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	category: string;
	tags: string[];
	publishedAt: Date;
	updatedAt: Date;
	author: Author;
	featuredImage?: string;
	status?: "draft" | "published";
}

/**
 * 用户类型
 */
export interface User {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	role: "user" | "admin";
	createdAt: Date;
	updatedAt: Date;
}

/**
 * 评论类型
 */
export interface Comment {
	id: string;
	postId: string;
	userId: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	user: User;
}
