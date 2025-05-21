import type { Post, User, Comment } from "./db";

/**
 * API响应基础类型
 */
export interface ApiResponse {
	success: boolean;
	message?: string;
}

/**
 * 分页元数据类型
 */
export interface PaginationMeta {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	totalPages: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

/**
 * 分页数据响应
 */
export interface PaginatedResponse<T> extends ApiResponse {
	data: T[];
	pagination: PaginationMeta;
}

/**
 * 文章列表响应
 */
export interface PostsResponse extends ApiResponse {
	posts: Post[];
}

/**
 * 单篇文章响应
 */
export interface PostResponse extends ApiResponse {
	post: Post;
}

/**
 * 用户响应
 */
export interface UserResponse extends ApiResponse {
	user: User;
}

/**
 * 评论响应
 */
export interface CommentsResponse extends ApiResponse {
	comments: Comment[];
}

/**
 * 错误响应
 */
export interface ErrorResponse extends ApiResponse {
	success: false;
	error: string;
	statusCode: number;
}
