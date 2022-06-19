<template>
    <component :is="el" class="l-grid">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-grid',
    props: {
        /**
         * The type of element to use for the root
         */
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
.l-grid {
    @apply grid;
    grid-gap: var(--gutter-width, theme('spacing.4'));
}

@supports (width: min(250px, 100%)) {
    .l-grid {
        grid-template-columns: repeat(
            auto-fit,
            minmax(min(var(--min-width, 250px), 100%), 1fr)
        );
    }
}
</style>
