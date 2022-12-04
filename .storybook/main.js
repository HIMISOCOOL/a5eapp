/**
 * @type {import("@storybook/builder-vite").StorybookViteConfig}
 */
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-vite',
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
};

