import type { Story, Args } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LSwitcher from './switcher.vue';
import LBox from './box.vue';

export default {
    title: 'Layout/Switcher',
    component: LSwitcher,
} as Args;

const Template: Story = args =>
    defineComponent({
        components: { 'l-switcher': LSwitcher, 'l-box': LBox },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-switcher v-bind="args" style="--gutter-width: ${
            args.gutterWidth
        }; --threshold: ${args.threshold};">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-switcher>`,
    });

export const Switcher = Template.bind({});
Switcher.args = {
    gutterWidth: '1rem',
    threshold: '24rem',
    default: String.raw`<l-box>Hello World</l-box>
    <l-box>Hello World Hello World Hello World Hello World Hello World Hello World</l-box>
    <l-box>Hello World</l-box>
    <l-box>Hello World</l-box>
    <l-box>Hello World</l-box>
    <l-box>Hello World</l-box>
    <l-box>Hello World</l-box>
    <l-box>Hello World</l-box>`,
};
