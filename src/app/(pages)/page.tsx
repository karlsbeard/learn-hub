"use client";

import { useEffect, useState } from "react";
import { Typography, Row, Col, Spin, Alert } from "antd";
import Card, { Meta } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useFetch } from "@/lib/hooks/useFetch";
import type { Post } from "@/types/db";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function HomePage() {
	// 使用自定义Hook获取文章数据
	const { data, loading, error } = useFetch<{ posts: Post[] }>("/api/posts");

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<Spin size="large" tip="加载中..." />
			</div>
		);
	}

	if (error) {
		return (
			<Alert message="加载错误" description="无法加载文章列表，请稍后再试。" type="error" showIcon className="my-4" />
		);
	}

	const posts = data?.posts || [];

	return (
		<div className="py-6">
			<section className="mb-12">
				<Title level={2}>欢迎来到 Learn Hub</Title>
				<Paragraph className="text-lg">
					这是一个分享学习和技术的个人网站，包含前端技术和人工智能领域的知识和探索。
				</Paragraph>
			</section>

			<section className="mb-12">
				<Title level={3} className="mb-6">
					最新文章
				</Title>
				<Row gutter={[16, 16]}>
					{posts.map((post) => (
						<Col xs={24} sm={12} lg={8} key={post.id}>
							<Card
								hoverable
								cover={post.featuredImage && <img alt={post.title} src={post.featuredImage} />}
								className="h-full flex flex-col"
							>
								<Meta
									title={post.title}
									description={
										<div>
											<div className="text-sm text-gray-500 mb-2">
												{new Date(post.publishedAt).toLocaleDateString()} · {post.category}
											</div>
											<div className="mb-4">{post.excerpt}</div>
											<Button variant="primary" size="middle">
												<Link href={`/${post.category}/${post.slug}`}>阅读更多</Link>
											</Button>
										</div>
									}
								/>
							</Card>
						</Col>
					))}
				</Row>
			</section>

			<section className="py-6">
				<Title level={3} className="mb-6">
					探索更多
				</Title>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Card title="前端技术" variant="secondary" className="h-full">
							<Paragraph>探索现代前端开发的最佳实践、框架和工具，包括React、Next.js、Vue以及相关技术。</Paragraph>
							<Button variant="outline">
								<Link href="/frontend">浏览前端文章</Link>
							</Button>
						</Card>
					</Col>
					<Col xs={24} sm={12}>
						<Card title="人工智能" variant="secondary" className="h-full">
							<Paragraph>深入了解人工智能领域的知识和应用，包括机器学习、深度学习、大语言模型(LLM)等。</Paragraph>
							<Button variant="outline">
								<Link href="/ai">浏览AI文章</Link>
							</Button>
						</Card>
					</Col>
				</Row>
			</section>
		</div>
	);
}
