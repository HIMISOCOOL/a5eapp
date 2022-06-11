<template>
    <component :is="el" class="center" :class="{ text, intrinsic: children }">
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
        text: {
            type: Boolean,
            defualt: false,
        },
        children: {
            type: Boolean,
            defualt: false,
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
.center {
    @apply box-content mli-auto;
    max-inline-size: var(--max-width, theme('spacing.60ch'));
    gap: var(--gutter-width, 0px);
    &.text {
        @apply text-center;
    }
    &.intrinsic {
        @apply flex flex-col items-center;
    }
}
</style>
