import type { Story, Args } from '@storybook/vue3';
import { defineComponent } from 'vue';
import CInput from './input.vue';

export default {
    title: 'Controls/Input',
    component: CInput,
} as Args;

const Template: Story = args =>
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

export const Text = Template.bind({});
Text.args = {
    type: 'text',
    class: 'w-full',
};

export const Number = Template.bind({});
Number.args = {
    type: 'number',
};

export const CheckBox = Template.bind({});
CheckBox.args = {
    type: 'checkbox',
};
