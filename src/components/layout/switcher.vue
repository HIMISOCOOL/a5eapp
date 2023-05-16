<template>
    <component :is="el" class="l-switcher">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

/**
 * This element _Switches_ between taking up space and collapsing into a list
 */
export default defineComponent({
    name: 'l-switcher',
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
<style scoped lang="postcss">
.l-switcher {
    @apply flex flex-wrap;
    gap: var(--gutter-width, theme('spacing.4'));
    & > * {
        @apply flex-grow;
        flex-basis: calc((var(--threshold, theme('spacing.96')) - 100%) * 999);
    }
    & > :nth-last-child(n + 5),
    & > :nth-last-child(n + 5) ~ * {
        @apply basis-full;
    }
}
</style>
