<template>
    <span class="c-pill">
        <!-- @slot default slot -->
        <slot></slot>
    </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'c-pill',
    // props: {
    //     // add props
    // },
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
.c-pill {
    @apply rounded-xl flex flex-row flex-nowrap;
    padding-block: var(--padding-block, theme('spacing.2'));
    padding-inline: var(--padding-inline, theme('spacing.4'));
}
</style>
