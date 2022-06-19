<template>
    <component :is="el" class="switcher">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-switcher',
    props: {
        el: {
            type: String,
            default: 'div',
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
.switcher {
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
