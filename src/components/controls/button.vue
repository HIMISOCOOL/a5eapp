<template>
    <component :is="el" class="c-button" :class="{ round, dark }">
        <!-- @slot default slot for content -->
        <slot></slot>
    </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'c-button',
    props: {
        el: {
            type: String,
            default: 'button',
        },
        round: {
            type: Boolean,
            default: false,
        },
        dark: {
            type: Boolean,
            default: false,
        },
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
.c-button {
    @apply inline-flex flex-row justify-center items-center border-2 border-solid border-black rounded-sm text-xs text-center;
    padding-block: var(--padding-block, theme('spacing.2'));
    padding-inline: var(--padding-inline, theme('spacing.2'));

    &.round {
        --padding-block: theme('spacing[0.5]');
        --padding-inline: theme('spacing[0.5]');
        @apply rounded-full w-8 h-8;
    }

    &.dark {
        @apply border-[#484848] bg-[#484848] text-white;
    }
}
</style>
