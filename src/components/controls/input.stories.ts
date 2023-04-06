import type { StoryFn, Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import CInput from './input.vue';

const meta: Meta<typeof CInput> = {
    title: 'Controls/Input',
    component: CInput,
};

export default meta;

type Story = StoryObj<typeof CInput>;

const Template: StoryFn<typeof CInput> = args =>
    defineComponent({
        components: { 'c-input': CInput },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-input v-bind="args">
        </c-input>`,
    });

export const Text = {
    render: Template,

    args: {
        type: 'text',
        class: 'w-full',
    },
};

export const Number: Story = {
    render: Template,

    args: {
        type: 'number',
    },
};

export const CheckBox: Story = {
    render: Template,

    args: {
        type: 'checkbox',
    },
};
