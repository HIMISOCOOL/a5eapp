import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Header from './header.vue';

export default {
    title: 'Page/Header',
    component: Header,
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { 'c-header': Header },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-header v-bind="args">
        </c-header>`,
    });

export const _Header = Template.bind({});
_Header.args = {
    // default: String.raw`<div>Hello world</div>`,
};
