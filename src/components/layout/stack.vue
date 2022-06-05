<template>
    <component :is="el" class="stack">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-stack',
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
.stack {
    @apply flex flex-col justify-start;
    &:deep(> *) {
        @apply mlb-0;
    }
    &:deep(> * + *) {
        margin-block-start: var(--space, theme('spacing.6'));
    }
}
</style>
