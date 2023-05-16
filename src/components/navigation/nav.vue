<template>
    <l-reel el="nav" class="navigation">
        <!-- @slot default slot for children -->
        <slot></slot>
    </l-reel>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LReel from '../layout/reel.vue';

export default defineComponent({
    name: 'Navigation',
    components: {
        LReel,
    },
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
<style lang="postcss">
.navigation {
    --background-color: theme('colors.slate.900');
}
</style>
