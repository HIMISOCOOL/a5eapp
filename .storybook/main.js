/**
 * @type {import("@storybook/vue3-vite").StorybookConfig}
 */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': '../src',
        };
        return config;
    },
    docs: {
        autodocs: true,
    },
};
export default config;
