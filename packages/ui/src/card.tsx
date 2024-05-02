import { css, cx } from "@repo/styled-system/css";
import { stack } from "@repo/styled-system/patterns";

export function Card({
	className,
	title,
	children,
	href,
}: {
	className?: string;
	title: string;
	children: React.ReactNode;
	href: string;
}): JSX.Element {
	return (
		<a
			className={cx(
				stack({
					gap: "2",
					padding: "8",
					backgroundColor: "slate.900/20",
					borderColor: "transparent",
					color: "white",
					transition: "all",

					_hover: {
						borderColor: "sky.200",
						borderLeftWidth: "medium",
					},
				}),
				className,
			)}
			href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
			rel="noopener noreferrer"
			target="_blank"
		>
			<h2
				className={css({
					fontWeight: "bold",
					fontSize: "2xl",
				})}
			>
				{title} <span>-&gt;</span>
			</h2>
			<p>{children}</p>
		</a>
	);
}
