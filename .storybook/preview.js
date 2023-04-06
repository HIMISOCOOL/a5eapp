import { setup } from '@storybook/vue3';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import '../src/assets/index.css';

setup(app => {
    app.use(createPinia());
    const router = createRouter({
        history: createWebHashHistory(),
        routes: [],
    });
    app.use(router);
});
const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const preview = {
    parameters,
};

export default preview;
