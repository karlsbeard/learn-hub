import { ImageResponse } from "next/og";

// 路由段配置
export const runtime = "edge";

// 图片元数据
export const alt = "Learn Hub - 个人学习与技术分享";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// 图像组件
export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: 60,
				color: "white",
				background: "linear-gradient(to bottom right, #3b82f6, #1e3a8a)",
				width: "100%",
				height: "100%",
				padding: 50,
				textAlign: "center",
			}}
		>
			<svg
				width="150"
				height="150"
				viewBox="0 0 24 24"
				fill="white"
				style={{ marginBottom: 40 }}
				aria-hidden="true"
				role="presentation"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
			</svg>
			<div
				style={{
					fontSize: 80,
					fontWeight: "bold",
					marginBottom: 20,
					lineHeight: 1.2,
				}}
			>
				Learn Hub
			</div>
			<div style={{ fontSize: 36, opacity: 0.8 }}>个人学习与技术分享平台</div>
		</div>,
		{ ...size },
	);
}
