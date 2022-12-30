<template>
    <main class="grid grid-cols-5">
        <section class="statistics col-span-1">Statistics</section>
        <section>
            <h3>Ability Scores</h3>
            <l-grid class="ability-scores">
                <AbilityScore
                    v-for="(value, key) in abilityScores"
                    :key="key"
                    v-bind="value"
                />
            </l-grid>
        </section>
        <section class="skills col-span-3">
            <h3>Skills</h3>
            <l-grid>
                <Passive
                    v-for="passive in passives"
                    :key="passive.name"
                    :name="passive.name"
                    :ability-score="abilityScores[passive.ability]"
                    :modifiers="passive.modifiers"
                />
                <Passive name="Other" :ability-score="{ score: 10 }" />
            </l-grid>

            <table>
                <thead>
                    <tr>
                        <th>Prof</th>
                        <th>Skill</th>
                        <th>Expertise</th>
                        <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    <Skill
                        v-for="{ defaultAbility, ...skill } in skills"
                        :key="skill.name"
                        v-bind="skill"
                        :default-ability="abilityScores[defaultAbility]"
                    />
                </tbody>
            </table>
        </section>
    </main>
</template>
<script lang="ts">
import { toRefs, defineComponent } from 'vue';
import AbilityScore from '@/components/abilityScores/abilityscore.vue';
import Passive from '@/components/skills/passive.vue';
import Skill from '@/components/skills/skill.vue';
import LGrid from '@/components/layout/grid.vue';
import LStack from '@/components/layout/stack.vue';
import { useCharacterStore } from '@/stores/character';
import { toModifier } from '@/utils';

export default defineComponent({
    name: 'Character',
    components: {
        AbilityScore,
        Passive,
        Skill,
        LGrid,
        LStack,
    },
    setup(props) {
        const { character } = useCharacterStore();
        return {
            ...toRefs(character),
            toModifier,
        };
    },
});
</script>
<style scoped lang="postcss">
main {
    grid-template-areas:
        'Statistics'
        'AbilityScores'
        'Skills';

    @media screen(md) {
        grid-template-areas:
            'AbilityScores Statistics'
            'AbilityScores Statistics'
            'AbilityScores Skills'
            'AbilityScores Skills';
    }

    @media screen(xl) {
        grid-template-areas:
            'AbilityScores Statistics Skills Skills'
            'AbilityScores Statistics Skills Skills'
            'AbilityScores Statistics Skills Skills';
    }
}

.skills {
    grid-area: Skills;
}
.ability-scores {
    grid-area: AbilityScores;
}
.statistics {
    grid-area: Statistics;
}
.destiny {
    grid-area: Destiny;
}
</style>
