<template>
    <tr class="skill">
        <td>
            <c-input type="checkbox" :checked="proficient" />
        </td>
        <td>
            <span>{{ name }}</span>
        </td>
        <td>
            <span v-if="toExpertiseDice(expertiseSources) === 0">none</span>
            <output title="Expertise Dice: " v-else :name="name">
                1d{{ toExpertiseDice(expertiseSources) }}
            </output>
        </td>
        <td><button title="See more">&gt;</button></td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import CInput from '@/components/controls/input.vue';

/**
 * A passive skill
 */
export default defineComponent({
    name: 'Passive',
    components: {
        CInput,
    },
    props: {
        /**
         * The name of the skill
         */
        name: {
            type: String,
            required: true,
        },
        /**
         * The number of expertise sources
         */
        expertiseSources: {
            type: Number,
            required: true,
        },
        /**
         * Whether or not the character is proficient with this skill
         */
        proficient: {
            type: Boolean,
            required: true,
        },
        /**
         * The characters current proficiency bonus
         */
        proficiencyBonus: {
            type: Number,
            required: true,
        },
        /**
         * Which ability is the default for this skill
         */
        defaultAbility: {
            type: Object,
            required: true,
        },
        /**
         * What misc bonuses this ability has
         */
        bonuses: {
            type: Array as PropType<Array<number>>,
            required: true,
        },
        /**
         * An array of misc notes for this skill
         */
        notes: {
            type: Array as PropType<Array<string>>,
            required: true,
        },
    },
    setup(props, context) {
        // hooks
        // computed
        // methods
        const toExpertiseDice = (sources: number) => {
            if (sources === 1) {
                return 4;
            }
            if (sources === 2) {
                return 6;
            }
            if (sources > 2) {
                return 8;
            }
            return 0;
        };
        // lifecycle
        return {
            toExpertiseDice,
        };
    },
});
</script>
<style scoped lang="postcss">
.skill {
    --justify: between;
    > label {
        @apply font-semibold text-xs;
    }
}
</style>
