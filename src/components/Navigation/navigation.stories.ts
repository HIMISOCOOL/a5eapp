import { type Story, type Meta, app } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import Navigation from './nav.vue';
import Tab from './Tab.vue';

type TabRow = {
    to: string;
    text: string;
};

const mockComponent = defineComponent({
    name: 'mockComponent',
    template: String.raw`<div>Hello world</div>`,
});

export default {
    title: 'Page/Navigation',
    component: Navigation,
    subcomponents: { Tab },
    decorators: [
        (storyFn, context) => {
            const router = createRouter({
                history: createWebHashHistory(),
                routes: context.args.tabs.map((t: TabRow) => ({
                    to: t.to,
                    name: t.to,
                    component: mockComponent,
                })),
            });
            app.use(router);
            app.component(mockComponent.name, mockComponent);

            return storyFn(context);
        },
    ],
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { Navigation, Tab, RouterView },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<Navigation v-bind="args">
            <Tab v-for="tab in args.tabs" :key="tab.to" :to="tab.to">{{ tab.text }}</Tab>
        </Navigation>
        <RouterView></RouterView>`,
    });

export const _Navigation = Template.bind({});
_Navigation.args = {
    tabs: [
        { to: '/character', text: 'Character' },
        { to: '/backgrounds', text: 'Backgrounds' },
        { to: '/features', text: 'Features' },
        { to: '/inventory', text: 'Inventory' },
        { to: '/notes', text: 'Notes' },
    ] as TabRow[],
};
