<template>
    <component :is="el" class="stack flex flex-col justify-start">
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
    & > * {
        @apply mlb-0;
    }
    & > * + * {
        margin-block-start: var(--space, 1.5rem);
    }
}
</style>
