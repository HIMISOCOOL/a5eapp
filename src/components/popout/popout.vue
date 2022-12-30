<template>
    <l-box class="popout" :class="originClasses">
        <l-stack>
            <l-cluster class="controls">
                <!-- @slot controls slot -->
                <slot name="controls"></slot>
            </l-cluster>
            <!-- @slot default slot for popout content -->
            <slot> popout content </slot>
        </l-stack>
    </l-box>
</template>
<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    computed,
    type PropType,
} from 'vue';
import LBox from '../layout/box.vue';
import LStack from '../layout/stack.vue';
import LCluster from '../layout/cluster.vue';
import { Origin } from './utils';

/**
 * A popout control
 */
export default defineComponent({
    name: 'c-popout',
    components: {
        LBox,
        LStack,
        LCluster,
    },
    props: {
        /**
         * The x position offset relative to the origin
         */
        x: {
            type: Number,
            required: true,
        },
        /**
         * The y position offset relative to the origin
         */
        y: {
            type: Number,
            required: true,
        },
        /**
         * space around the element
         */
        space: {
            type: String,
            required: false,
            default: '1em',
        },
        /**
         * Which corner of the parent element to popout from
         */
        origin: {
            type: Number as PropType<Origin>,
            required: false,
            default: Origin.topLeft,
        },
    },
    setup(props, context) {
        // hooks
        const data = reactive({
            xPos: computed(() => `${props.x}px`),
            yPos: computed(() => `${props.y}px`),
            originClasses: computed(() => {
                return {
                    'top-left': props.origin === Origin.topLeft,
                    'top-right': props.origin === Origin.topRight,
                    'bottom-left': props.origin === Origin.bottomLeft,
                    'bottom-right': props.origin === Origin.bottomRight,
                };
            }),
        });
        // computed
        // methods
        // lifecycle
        return {
            ...toRefs(data),
        };
    },
});
</script>
<style scoped lang="postcss">
.popout {
    margin: v-bind(space);
    position: fixed;
    .controls {
        --justify: flex-end;
        @apply -mbs-2.5 pbe-2.5;
    }
    &.top-left {
        top: v-bind(yPos);
        left: v-bind(xPos);
    }

    &.top-right {
        top: v-bind(yPos);
        right: v-bind(xPos);
    }

    &.bottom-left {
        bottom: v-bind(yPos);
        left: v-bind(xPos);
    }

    &.bottom-right {
        bottom: v-bind(yPos);
        right: v-bind(xPos);
    }
}
</style>
