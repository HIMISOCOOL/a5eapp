import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LStack from './stack.vue';

export default {
    title: 'Layout/Stack',
    component: LStack,
} as Meta<typeof LStack>;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'l-stack': LStack },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-stack v-bind="args">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-stack>`,
    });

export const Stack = {
    render: Template,

    args: {
        default: String.raw`<div>hello world</div>`,
    },
};

export const TwoElements = {
    render: Template,

    args: {
        default: String.raw`<div>hello world</div><div>foo bar</div>`,
    },
};

export const List = {
    render: Template,

    args: {
        el: 'ul',
        default: String.raw`<li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>`,
    },
};
