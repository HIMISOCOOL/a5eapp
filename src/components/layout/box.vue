<template>
    <component :is="el" class="l-box" :class="{ dark }">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-box',
    props: {
        /**
         * The type of element to use for the root
         */
        el: {
            type: String,
            default: 'div',
        },
        dark: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, contexnt) {
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
<style scoped lang="postcss">
.l-box {
    padding: var(--padding, theme('spacing.4'));
    @apply border-solid;
    border-width: var(--border-width, theme('borderWidth.2'));
    color: var(--text-color, theme('colors.black'));
    background-color: var(--background-color, theme('colors.white'));
    &:deep(*) {
        color: inherit;
    }
    &.dark {
        color: var(--text-color-dark, theme('colors.white'));
        background-color: var(
            --background-color-dark,
            theme('colors.slate.700')
        );
    }
}
</style>
