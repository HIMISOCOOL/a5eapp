import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import LSidebar from './sidebar.vue';
import LBox from './box.vue';

export default {
    title: 'Layout/Sidebar',
    component: LSidebar,
} as Meta<typeof LSidebar>;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'l-sidebar': LSidebar, 'l-box': LBox },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<l-sidebar v-bind="args" style="--gutter-width: ${
            args.gutterWidth
        }; --sidebar-width: ${args.sidebarWidth};">
            <template v-if="${'default' in args}" v-slot>${
            args.default
        }</template>
        </l-sidebar>`,
    });

export const Left = {
    render: Template,

    args: {
        gutterWidth: '1rem',
        sidebarWidth: '50%',
        left: true,
        right: false,
        default: String.raw`<l-box>Left side</l-box><l-box>hello world</l-box>`,
    },
};

export const Right = {
    render: Template,

    args: {
        ...Left.args,
        right: true,
        left: false,
        default: String.raw`<l-box>hello world</l-box><l-box>Right side</l-box>`,
    },
};
