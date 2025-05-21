"use client";

import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

// 自定义主题配置
const themeConfig = {
	token: {
		colorPrimary: "#1677ff", // 保持蓝色作为主色调
		borderRadius: 6,
		fontSize: 14,
	},
	components: {
		Menu: {
			colorItemTextHover: "#1677ff",
			colorItemTextSelected: "#1677ff",
			colorItemBgSelected: "rgba(22, 119, 255, 0.1)",
		},
		Layout: {
			headerBg: "#ffffff",
			bodyBg: "#ffffff",
		},
	},
};

// 主题提供者组件
export default function ThemeProvider({ children }: { children: ReactNode }) {
	return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
