"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;

type MenuItem = {
	key: string;
	label: React.ReactNode;
	children?: MenuItem[];
};

const Navigation = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

	// 定义导航项
	const navItems: MenuItem[] = [
		{
			key: "/",
			label: <Link href="/">首页</Link>,
		},
		{
			key: "/ai",
			label: <Link href="/ai">人工智能</Link>,
			children: [
				{ key: "/ai/python", label: <Link href="/ai/python">Python</Link> },
				{ key: "/ai/pytorch", label: <Link href="/ai/pytorch">PyTorch</Link> },
				{
					key: "/ai/langchain",
					label: <Link href="/ai/langchain">LangChain</Link>,
				},
				{ key: "/ai/rag", label: <Link href="/ai/rag">RAG</Link> },
				{ key: "/ai/agent", label: <Link href="/ai/agent">AI Agent</Link> },
				{ key: "/ai/mcp", label: <Link href="/ai/mcp">MCP</Link> },
			],
		},
		{
			key: "/frontend",
			label: <Link href="/frontend">前端技术</Link>,
			children: [
				{
					key: "/frontend/react",
					label: <Link href="/frontend/react">React</Link>,
				},
				{ key: "/frontend/vue", label: <Link href="/frontend/vue">Vue</Link> },
				{
					key: "/frontend/webpack",
					label: <Link href="/frontend/webpack">Webpack</Link>,
				},
				{
					key: "/frontend/nextjs",
					label: <Link href="/frontend/nextjs">Next.js</Link>,
				},
				{ key: "/frontend/ssr", label: <Link href="/frontend/ssr">SSR</Link> },
				{ key: "/frontend/seo", label: <Link href="/frontend/seo">SEO</Link> },
			],
		},
		{
			key: "/about",
			label: <Link href="/about">关于</Link>,
		},
	];

	// 根据当前路径更新选中项
	useEffect(() => {
		const updateSelectedKeys = () => {
			// 首页特殊处理
			if (pathname === "/") {
				setSelectedKeys(["/"]);
				return;
			}

			// 对于其他路径，查找最匹配的导航项
			const findItem = (items: MenuItem[], path: string): string | null => {
				for (const item of items) {
					if (path.startsWith(item.key) && item.key !== "/") {
						return item.key;
					}
					if (item.children) {
						const childMatch = item.children.find((child) => path === child.key || path.startsWith(`${child.key}/`));
						if (childMatch) {
							return childMatch.key;
						}
					}
				}
				return null;
			};

			const matchedKey = findItem(navItems, pathname);
			if (matchedKey) {
				setSelectedKeys([matchedKey]);
			} else {
				setSelectedKeys([]);
			}
		};

		updateSelectedKeys();
	}, [pathname]);

	// 处理菜单点击事件
	const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
		// 移动端菜单点击后关闭抽屉
		setMobileMenuOpen(false);
	};

	// 切换移动端菜单
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<Layout className="layout">
			<Header className="bg-white border-b px-0 flex items-center justify-between h-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
					<div className="flex items-center">
						<Link href="/" className="font-bold text-xl">
							Learn Hub of KarlsBeard
						</Link>
					</div>

					{/* 桌面端菜单 */}
					<div className="hidden md:block">
						<Menu
							mode="horizontal"
							selectedKeys={selectedKeys}
							items={navItems}
							onClick={handleMenuClick}
							className="border-0"
						/>
					</div>

					{/* 移动端菜单按钮 */}
					<div className="md:hidden">
						<Button
							icon={<MenuOutlined />}
							onClick={toggleMobileMenu}
							type="text"
							className="flex items-center justify-center"
						/>
					</div>
				</div>
			</Header>

			{/* 移动端抽屉菜单 */}
			<Drawer
				title="导航菜单"
				placement="right"
				onClose={() => setMobileMenuOpen(false)}
				open={mobileMenuOpen}
				width={250}
			>
				<Menu
					mode="inline"
					selectedKeys={selectedKeys}
					items={navItems}
					onClick={handleMenuClick}
					className="border-0"
				/>
			</Drawer>
		</Layout>
	);
};

export default Navigation;
