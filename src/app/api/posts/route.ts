import { NextResponse } from "next/server";
import { getAllPosts, getPostsByCategory } from "@/server/services/posts";

/**
 * GET /api/posts
 * 获取文章列表，支持分类过滤
 */
export async function GET(request: Request) {
	try {
		// 获取查询参数
		const { searchParams } = new URL(request.url);
		const category = searchParams.get("category");

		// 根据分类获取文章或获取全部文章
		const posts = category ? await getPostsByCategory(category) : await getAllPosts();

		return NextResponse.json({ posts }, { status: 200 });
	} catch (error) {
		console.error("Error fetching posts:", error);
		return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
	}
}
