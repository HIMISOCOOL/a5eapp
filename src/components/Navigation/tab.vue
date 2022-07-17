<template>
    <RouterLink
        :to="to"
        class="c-tab"
        active-class="active"
        exact-active-class="exact"
    >
        <!-- @slot default slot for tab text -->
        <slot></slot
    ></RouterLink>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

export default defineComponent({
    name: 'c-tab',
    components: {
        RouterLink,
    },
    props: {
        to: {
            type: [String, Object] as PropType<RouteLocationRaw>,
            required: true,
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
.c-tab {
    @apply font-bold text-xs text-white plb-6 block;
    &.active.exact {
        @apply text-base bg-white text-black;
    }
}
</style>
