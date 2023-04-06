/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').ESLint}
 */
module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
        'plugin:storybook/recommended',
    ],
    env: {
        'vue/setup-compiler-macros': true,
    },
    rules: {
        'vue/multi-word-component-names': 'off',
    },
    overrides: [
        {
            files: ['**/*.cjs'],
            env: {
                node: true,
            },
        },
        // {
        //     files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
        //     extends: ['plugin:cypress/recommended'],
        // },
    ],
};
