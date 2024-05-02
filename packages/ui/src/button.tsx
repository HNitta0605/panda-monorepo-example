"use client";

import { ReactNode } from "react";
import { css, cx } from "@repo/styled-system/css";

interface ButtonProps {
	children: ReactNode;
	className?: string;
	appName: string;
}

export const ButtonStyle = css({
	fontSize: "lg",
	padding: "1",
	borderWidth: "thin",
	borderColor: "sky.200",
	borderRadius: "sm",
	cursor: "pointer",
	_hover: {
		backgroundColor: "sky.100",
	},

	animation: "pulse",
});

export const Button = ({ children, className, appName }: ButtonProps) => {
	return (
		<button
			type="button"
			className={cx(ButtonStyle, className)}
			onClick={() => alert(`Hello from your ${appName} app!`)}
		>
			{children}
		</button>
	);
};
