import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Header from './header.vue';

const meta: Meta<typeof Header> = {
    title: 'Page/Header',
    component: Header,
};

export default meta;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'c-header': Header },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-header v-bind="args">
        </c-header>`,
    });

export const _Header = {
    render: Template,

    args: {
        // default: String.raw`<div>Hello world</div>`,
    },
};
