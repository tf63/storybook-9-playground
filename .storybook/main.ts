import path from "node:path"
import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.*"],
	// addons: [
	//     '@chromatic-com/storybook',
	//     '@storybook/addon-essentials',
	//     '@storybook/addon-links',
	//     '@storybook/addon-interactions',
	//     '@storybook/addon-storysource',
	//     '@storybook/addon-a11y',
	//     '@storybook/addon-console',
	//     '@whitespace/storybook-addon-html',
	// ],
	framework: "@storybook/nextjs-vite",
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "./src"),
				},
			},
		})
	},
}

export default config
