import type { Story, Meta } from '@storybook/vue3';
import { actions } from '@storybook/addon-actions';
import { defineComponent, reactive, toRefs } from 'vue';
import CPopout from './popout.vue';
import { Origin } from './utils';

export default {
    title: 'Controls/Popout',
    component: CPopout,
    argTypes: {
        origin: {
            controls: 'select',
            options: {
                [`topLeft = ${Origin.topLeft}`]: Origin.topLeft,
                [`topRight = ${Origin.topRight}`]: Origin.topRight,
                [`bottomLeft = ${Origin.bottomLeft}`]: Origin.bottomLeft,
                [`bottomRight = ${Origin.bottomRight}`]: Origin.bottomRight,
            },
        },
    },
    args: {
        x: 10,
        y: 10,
    },
} as Meta;

const logEvents = actions({ openPopout: 'opened', closePopout: 'closed' });

const Template: Story = args =>
    defineComponent({
        components: {
            'c-popout': CPopout,
        },
        setup() {
            const data = reactive({
                showPopout: false,
            });
            const openPopout = (e: MouseEvent) => {
                logEvents.openPopout(e);
                data.showPopout = true;
            };
            const closePopout = (e: MouseEvent) => {
                logEvents.closePopout(e);
                data.showPopout = false;
            };
            return {
                args,
                ...toRefs(data),
                openPopout,
                closePopout,
            };
        },
        template: String.raw`
        <div class="relative">
            <button @click="openPopout">open Popout</button>
            <c-popout v-bind="args" v-show="showPopout">
                <template #controls>
                    <button @click="closePopout">X</button>
                </template>
                This is some popout content
                <p>assdasdfasddfasdasd</p>
            </c-popout>
        </div>`,
    });

export const Popout = Template.bind({});
