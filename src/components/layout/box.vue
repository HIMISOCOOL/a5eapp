<template>
    <component :is="el" class="box">
        <!-- @slot default slot for children -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'l-box',
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
.box {
    padding: var(--padding, theme('spacing.4'));
    @apply border-solid;
    border-width: var(--border-width, theme('borderWidth.2'));
    &:deep(*) {
        color: inherit;
    }
}
</style>
