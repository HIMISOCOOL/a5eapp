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
    props: {
        // add props
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
.c-pill {
    @apply rounded-lg pli-2 plb-1;
}
</style>
