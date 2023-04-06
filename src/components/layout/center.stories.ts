import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LCenter from './center.vue';
import LBox from './box.vue';
import LStack from './stack.vue';

export default {
    title: 'Layout/Center',
    component: LCenter,
} as Meta<typeof LCenter>;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'l-center': LCenter, 'l-box': LBox, 'l-stack': LStack },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-center v-bind="args" style="--max-width: ${
            args.maxWidth
        }; --gutter-width: ${args.gutterWidth};">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-center>`,
    });

export const Center = {
    render: Template,

    args: {
        default: String.raw`<div>Hello world</div>`,
        maxWidth: '',
        gutterWidth: '',
    },
};

export const WithText = {
    render: Template,

    args: {
        ...Center.args,
        default: String.raw`<div>Hello world foo bar bin baz</div>`,
        text: true,
    },
};

export const CenterChildren = {
    render: Template,

    args: {
        ...Center.args,
        default: String.raw`<l-stack el="ul">
        <l-box el="li">Hello World</l-box>
        <l-box el="li">Foo</l-box>
        <l-box el="li">Bar</l-box>
        <l-box el="li">Baz</l-box>
    </l-stack>`,
    },
};
