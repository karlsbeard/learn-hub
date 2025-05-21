"use client";

import type React from "react";
import { Card as AntCard } from "antd";
import { classNames } from "@/lib/utils/classNames";

export interface CardProps {
	title?: React.ReactNode;
	extra?: React.ReactNode;
	children: React.ReactNode;
	bordered?: boolean;
	hoverable?: boolean;
	variant?: "default" | "outline" | "secondary";
	className?: string;
	bodyStyle?: React.CSSProperties;
	cover?: React.ReactNode;
	onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
	title,
	extra,
	children,
	bordered = true,
	hoverable = false,
	variant = "default",
	className,
	bodyStyle,
	cover,
	onClick,
}) => {
	const cardClassNames = classNames(className, {
		"border-gray-200": variant === "default",
		"border-gray-100 bg-gray-50": variant === "secondary",
		"border-blue-100 shadow-sm": variant === "outline",
	});

	return (
		<AntCard
			title={title}
			extra={extra}
			bordered={bordered}
			hoverable={hoverable}
			className={cardClassNames}
			bodyStyle={bodyStyle}
			cover={cover}
			onClick={onClick}
		>
			{children}
		</AntCard>
	);
};

// 导出子组件
export const { Meta } = AntCard;

export default Card;
