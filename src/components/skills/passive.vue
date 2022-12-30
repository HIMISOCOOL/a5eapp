<template>
    <l-cluster el="output" class="passive">
        <label>Passive {{ name }}</label>
        <span :title="valueLabel">{{ value }}</span>
    </l-cluster>
</template>
<script lang="ts">
import {
    defineComponent,
    reactive,
    computed,
    toRefs,
    type PropType,
} from 'vue';
import LCluster from '@/components/layout/cluster.vue';
import { toModifier } from '@/utils';

/**
 * A passive skill
 */
export default defineComponent({
    name: 'Passive',
    components: {
        LCluster,
    },
    props: {
        /**
         * The name of the passive
         */
        name: {
            type: String,
            required: true,
        },
        /**
         * Which ability score is associated with this passive
         */
        abilityScore: {
            type: Object,
            required: true,
        },
        /**
         * modifiers to add to this passive
         */
        modifiers: {
            type: Array as PropType<Array<number>>,
            default: () => [],
        },
    },
    setup(props, context) {
        // hooks
        const abilityMod = computed(() => toModifier(props.abilityScore.score));
        // computed
        const data = reactive({
            abilityMod,
            valueLabel: computed(
                () =>
                    `10 + ${props.abilityScore.name}(${abilityMod.value}) + ${props.modifiers}`
            ),
            value: computed(
                () =>
                    10 +
                    abilityMod.value +
                    props.modifiers.reduce((m, total) => total + m, 0)
            ),
        });
        // methods
        // lifecycle
        return {
            ...toRefs(data),
            toModifier,
        };
    },
});
</script>
<style scoped lang="postcss">
.passive {
    --justify: between;
    > label {
        @apply font-light text-xs;
    }
    > span {
        @apply font-semibold text-base;
    }
}
</style>
