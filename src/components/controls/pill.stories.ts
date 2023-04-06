import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import CPill from './pill.vue';

const meta: Meta<typeof CPill> = {
    title: 'Controls/Pill',
    component: CPill,
};

export default meta;

const Template: StoryFn = args =>
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

export const Pill = {
    render: Template,

    args: {
        class: 'bg-red-400 text-white',
        default: 'Hello World',
    },
};
