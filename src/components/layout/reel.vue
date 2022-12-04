<template>
    <l-box class="l-reel" :el="el">
        <!-- @slot default slot for children -->
        <slot></slot>
    </l-box>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LBox from './box.vue';

export default defineComponent({
    name: 'l-reel',
    components: {
        'l-box': LBox,
    },
    props: {
        /**
         * The type of element to use for the root
         */
        el: {
            type: String,
            default: 'div',
        },
    },
    setup(props, context) {
        // hooks
        // computed
        // methods
        // lifecycle
        return {
            // return data
        };
    },
});
</script>
<style lang="postcss">
.l-reel {
    &.l-box {
        --padding-block: theme('spacing.3');
        --padding-inline: theme('spacing.5');
    }
}
</style>
<style scoped lang="postcss">
.l-reel {
    @apply overflow-x-auto whitespace-nowrap flex flex-row flex-nowrap;
    &:deep(> * + *) {
        margin-inline-start: var(--space, theme('spacing.4'));
    }
}
</style>
