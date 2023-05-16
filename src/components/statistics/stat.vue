<template>
    <l-box el="label" class="statistic">
        <span>
            <!-- @slot default slot for label of the statistic -->
            <slot></slot>
        </span>
        <output :name="name.toLowerCase()">
            <strong>{{ value }}</strong>
        </output>
    </l-box>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LBox from '@/components/layout/box.vue';

export default defineComponent({
    name: 'c-statistic',
    components: {
        LBox,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: [Number, String],
            required: true,
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
.statistic {
    @apply flex flex-row justify-center;
    & > span {
    }
    & > output {
        @apply pl-2;
    }
}
</style>
