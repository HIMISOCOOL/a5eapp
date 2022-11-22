<template>
    <main class="grid grid-cols-5">
        <section class="statistics col-span-1">Statistics</section>
        <section>
            <h3>Ability Scores</h3>
            <l-grid class="ability-scores">
                <AbilityScore
                    v-for="(value, key) in abilityScore"
                    :key="key"
                    v-bind="value"
                />
            </l-grid>
        </section>
        <section class="skills col-span-3">Passives</section>
        <section class="skills col-span-3">Skills</section>
    </main>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent, ref } from 'vue';

import AbilityScore from '@/components/abilityScores/abilityscore.vue';
import LGrid from '@/components/layout/grid.vue';

const getAbilityScore = (name: string, score: any) => {
    const abbreviation = name.substring(0, 3).toUpperCase();
    return {
        name,
        abbreviation,
        ...score,
    };
};
const getAbilityScores = (abilityScores: any) => {
    const completeScores = Object.keys(abilityScores).map(key =>
        getAbilityScore(key, abilityScores[key])
    );
    return completeScores.reduce(
        (prev, curr) => ({ ...prev, [curr.name]: curr }),
        {}
    );
};

export default defineComponent({
    name: 'Character',
    components: {
        AbilityScore,
        LGrid,
    },
    setup(props) {
        const proficiencyBonus = ref(0);
        const character = reactive({
            abilityScore: getAbilityScores({
                Strength: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
                Dexterity: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
                Constitution: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
                Wisdom: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
                Inteligence: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
                Charisma: {
                    score: 0,
                    saveBonus: 0,
                    proficient: false,
                    proficiencyBonus,
                },
            }),
        });
        return {
            ...toRefs(character),
        };
    },
});
</script>
<style scoped>
main {
    grid-template-areas:
        'AbilityScores Statistics Destiny Destiny Destiny'
        'AbilityScores Statistics Skills Skills Skills'
        'AbilityScores Statistics Skills Skills Skills';
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
