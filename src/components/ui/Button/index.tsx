"use client";

import type React from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd/es/button";
import { classNames } from "@/lib/utils/classNames";

// 创建自定义按钮属性，不直接扩展AntButtonProps
export interface CustomButtonProps {
	variant?: "primary" | "secondary" | "outline" | "text" | "link";
	fullWidth?: boolean;
}

export type ButtonProps = Omit<AntButtonProps, "variant"> & CustomButtonProps;

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	fullWidth = false,
	className,
	type,
	...props
}) => {
	// 根据variant确定按钮类型
	let buttonType: AntButtonProps["type"] = type;
	if (!type) {
		switch (variant) {
			case "primary":
				buttonType = "primary";
				break;
			case "secondary":
				buttonType = "default";
				break;
			case "outline":
				buttonType = "default";
				break;
			case "text":
				buttonType = "text";
				break;
			case "link":
				buttonType = "link";
				break;
			default:
				buttonType = "primary";
		}
	}

	const buttonClassNames = classNames(className, {
		"w-full": fullWidth,
		"border-blue-600": variant === "outline" && !props.danger,
		"text-blue-600 hover:text-blue-500": variant === "outline" && !props.danger,
		"border-gray-300 bg-gray-50": variant === "secondary" && !props.danger,
	});

	return (
		<AntButton type={buttonType} className={buttonClassNames} {...props}>
			{children}
		</AntButton>
	);
};

export default Button;
