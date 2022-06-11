<template>
    <component :is="el" class="cluster">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-center',
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
.cluster {
    @apply flex flex-wrap;
    gap: var(--gutter-width, theme('spacing.4'));
    justify-content: var(--justify, flex-start);
    align-items: var(--align, flex-start);
}
</style>
