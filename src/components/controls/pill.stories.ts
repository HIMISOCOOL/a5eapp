import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import CPill from './pill.vue';

export default {
    title: 'Controls/Pill',
    component: CPill,
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { 'c-pill': CPill },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-pill v-bind="args">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </c-pill>`,
    });

export const Pill = Template.bind({});
Pill.args = {
    class: 'bg-red-400 text-white',
    default: 'Hello World',
};
