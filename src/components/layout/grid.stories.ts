import type { Story, Args } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LGrid from './grid.vue';

export default {
    title: 'Layout/Grid',
    component: LGrid,
} as Args;

const Template: Story = args =>
    defineComponent({
        components: { 'l-grid': LGrid },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-grid v-bind="args" style="--gutter-width: ${
            args.gutterWidth
        }; --min-width: ${args.minWidth};">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-grid>`,
    });

export const Grid = Template.bind({});
Grid.args = {
    gutterWidth: '1rem',
    minWidth: '250px',
    default: String.raw`<div>hello world</div>
    <div>hello world</div>
    <div>hello world</div>
    <div>hello world</div>
    <div>hello world</div>
    <div>hello world</div>
    <div>hello world</div>`,
};
