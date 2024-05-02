import { Card } from "@repo/ui/card";
import { flex } from "@repo/styled-system/patterns";
import { css } from "@repo/styled-system/css";

const LINKS = [
	{
		title: "Zenn",
		href: "https://turbo.build/repo/docs",
		description: "Find in-depth information about Turborepo features and API.",
	},
];

export default function Page(): JSX.Element {
	return (
		<main
			className={flex({ direction: "column", paddingX: "20", height: "full" })}
		>
			<h1
				className={css({
					flex: "1",
					fontFamily: "mono",
					fontWeight: "bold",
					alignContent: "center",
					maxHeight: "36",
				})}
			>
				<span className={css({ color: "orange.700" })}>panda</span> monorepo
				example
			</h1>
			<div>
				{LINKS.map(({ title, href, description }) => (
					<Card href={href} key={title} title={title}>
						{description}
					</Card>
				))}
			</div>
		</main>
	);
}
