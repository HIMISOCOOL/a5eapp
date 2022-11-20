<template>
    <input :type="type" class="c-input" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'c-input',
    props: {
        type: { type: String, default: 'text' },
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
.c-input {
    @apply border-2 border-solid border-black rounded-sm text-xs text-center;
    padding-block: var(--padding-block, theme('spacing.2'));
    &[type='number'] {
        appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            @apply appearance-none m-0;
        }
    }
    &[type='checkbox'] {
        @apply w-1em h-1em align-top bg-no-repeat bg-center bg-contain appearance-none rounded-none p-0 text-base;
        margin-top: calc(1rem - 1em * 0.5);
        print-color-adjust: exact;
        /* @include transition($form-check-transition); */

        &:active {
            @apply border-blue-500 bg-slate-200;
        }

        &:focus {
            @apply border-blue-500 outline-0;
            box-shadow: 0 0 0 0.25rem theme('colors.blue.500') 40;
        }

        &:checked {
            /* TODO:MM add tick svg */
        }

        &[type='checkbox']:indeterminate {
            /* TODO:MM add dash svg */
        }

        &:disabled {
            @apply pointer-events-none filter-none opacity-50;
        }
        /*
        Use disabled attribute in addition of :disabled pseudo-class
        See: https://github.com/twbs/bootstrap/issues/28247
         */
        &[disabled],
        &:disabled {
            & ~ label {
                @apply cursor-default opacity-50;
            }
        }
    }
}
</style>
