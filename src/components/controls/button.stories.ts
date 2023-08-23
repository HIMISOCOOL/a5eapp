import type { StoryFn, Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import CButton from './button.vue';
import PencilIcon from '../icons/Pencil.vue';

const meta: Meta<typeof CButton> = {
    title: 'Controls/Button',
    component: CButton,
};

export default meta;

type Story = StoryObj<typeof CButton>;

const Template: StoryFn<typeof CButton> = args =>
    defineComponent({
        components: {
            'c-button': CButton,
            'pencil-icon': PencilIcon,
        },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-button v-bind="args">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </c-button>`,
    });

export const Text = {
    render: Template,

    args: {
        default: 'Button',
    },
};

export const AsLink: Story = {
    render: Template,

    args: {
        el: 'a',
        default: 'I am a link now',
        href: 'https://www.google.com',
    },
};

export const Rounded: Story = {
    render: Template,

    args: {
        default: String.raw`<pencil-icon class="block w-5 h-5" fill="black"/><span class="sr-only">Edit Button<span>`,
        round: true,
    },
};

export const InvertedColorsAndRounded: Story = {
    render: Template,

    args: {
        default: String.raw`<pencil-icon class="block w-5 h-5" fill="white" /><span class="sr-only">Edit Button<span>`,
        round: true,
        dark: true,
    },
};

export const InvertedColors: Story = {
    render: Template,
    args: {
        default: 'The theme is inverted',
        dark: true,
    },
};
