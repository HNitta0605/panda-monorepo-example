import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	outdir: "../styled-system",
	preflight: true,
	strictTokens: true,
	strictPropertyValues: true,
	jsxFramework: "react",
	theme: {
		extend: {
			tokens: {
				colors: {
					brand: {
						value: "#479ac2",
					},
				},
			},
		},
	},
	globalCss: {},
});
