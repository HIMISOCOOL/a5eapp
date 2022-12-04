import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Navigation from './nav.vue';
import Tab from './tab.vue';

type TabRow = {
    to: string;
    text: string;
};

const mockComponent = defineComponent({
    name: 'mockComponent',
    props: ['text'],
    template: String.raw`<div>Hello {{ text }}</div>`,
});

export default {
    title: 'Page/Navigation',
    component: Navigation,
    subcomponents: { Tab },
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: {
            'c-navigation': Navigation,
            'c-tab': Tab,
            RouterView,
            mockComponent,
        },
        setup() {
            const router = useRouter();
            args.tabs.forEach(({ to, text }: TabRow) => {
                router.addRoute({
                    path: to,
                    name: text,
                    props: { text },
                    component: mockComponent,
                });
            });
            router.push(args.tabs[0].text);
            return {
                args,
            };
        },
        template: String.raw`<c-navigation v-bind="args">
            <c-tab v-for="tab in args.tabs" :key="tab.to" :to="tab.to">{{ tab.text }}</c-tab>
        </c-navigation>
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
