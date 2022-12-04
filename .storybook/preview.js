import { app } from '@storybook/vue3';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import '../src/assets/index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

app.use(createPinia());
const router = createRouter({
    history: createWebHashHistory(),
    routes: [],
});
app.use(router);
