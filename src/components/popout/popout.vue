<template>
    <l-box class="popout" :class="originClasses">
        <l-box>
            <slot name="controls"></slot>
        </l-box>
        <slot> popout content </slot>
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
import { Origin } from './utils';

export default defineComponent({
    name: 'c-popout',
    components: {
        LBox,
    },
    props: {
        x: {
            type: Number,
            required: true,
        },
        y: {
            type: Number,
            required: true,
        },
        space: {
            type: String,
            required: false,
            default: '1em',
        },
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
