<template>
    <component :is="el" class="sidebar">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-sidebar',
    props: {
        el: {
            type: String,
            default: 'div',
        },
        left: {
            type: Boolean,
            default: true,
        },
        right: {
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
.sidebar {
    @apply flex flex-wrap;
    gap: var(--gutter-width, theme('spacing.4'));
    &.left > :first-child {
        @apply flex-grow;
    }
    &.left > :last-child {
        @apply basis-0 flex-grow-999;
        min-inline-size: var(--sidebar-width, theme('spacing.half'));
    }
    &.right > :first-child {
        @apply flex-grow;
    }
    &.right > :last-child {
        @apply basis-0 flex-grow-999;
        min-inline-size: var(--sidebar-width, theme('spacing.half'));
    }
}
</style>
