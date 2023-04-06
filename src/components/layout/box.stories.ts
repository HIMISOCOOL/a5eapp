import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LBox from './box.vue';

export default {
    title: 'Layout/Box',
    component: LBox,
} as Meta<typeof LBox>;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'l-box': LBox },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-box v-bind="args">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-box>`,
    });

export const Box = {
    render: Template,

    args: {
        default: String.raw`<div>Hello world</div>`,
    },
};

export const NoBorder = {
    render: Template,

    args: {
        style: '--border-width: 0px;',
        default: String.raw`<div>No border on this one</div>`,
    },
};

export const DarkMode = {
    render: Template,

    args: {
        dark: true,
        default: String.raw`<div>With border but dark mode</div>`,
    },
};
