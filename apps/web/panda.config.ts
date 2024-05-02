import { defineConfig } from "@pandacss/dev";
import config from "@repo/panda-config";

export default defineConfig({
	...config,
	include: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./node_modules/@repo/ui/src/**/*.{ts,tsx}",
	],
	importMap: "@repo/styled-system",
});
