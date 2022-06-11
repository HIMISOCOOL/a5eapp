import type { Story, Args } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LCluster from './cluster.vue';
import LBox from './box.vue';

const justifyOptions = [
    'flex-start',
    'flex-end',
    'space-evenly',
    'space-around',
    'space-between',
] as const;
const alignOptions = ['flex-start', 'flex-end', 'stretch', 'center'] as const;

export default {
    title: 'Layout/Cluster',
    component: LCluster,
    argTypes: {
        justify: {
            control: 'select',
            options: justifyOptions,
        },
        align: {
            control: 'select',
            options: alignOptions,
        },
    },
} as Args;

const Template: Story = args =>
    defineComponent({
        components: { 'l-cluster': LCluster, 'l-box': LBox },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-cluster v-bind="args" style="--justify: ${
            args.justify
        }; --align: ${args.align};">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-cluster>`,
    });

export const Cluster = Template.bind({});
Cluster.args = {
    default: String.raw`<l-box>Hello world</l-box><l-box>Hello world</l-box><l-box>Hello world</l-box>`,
    justify: justifyOptions[0],
    align: alignOptions[0],
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    ...Cluster.args,
    justify: justifyOptions[1],
};
