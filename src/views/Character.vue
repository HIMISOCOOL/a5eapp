<template>
    <l-switcher el="main">
        <section class="statistics">
            <l-cluster>
                <Statistic class="w-1/2" name="Armor Class" :value="0">
                    <abbr title="Armor Class">AC</abbr>
                </Statistic>
                <Statistic class="w-1/2" name="Speed" :value="0">
                    Speed
                </Statistic>
                <Statistic
                    class="w-1/2"
                    name="Proficiency Bonus"
                    :value="proficiencyBonus"
                >
                    <abbr title="Proficiency">Prof</abbr>&nbsp;Bonus
                </Statistic>
                <Statistic class="w-1/2" name="Size" :value="'medium'">
                    Size
                </Statistic>
                <Statistic class="w-1/2" name="Inspiration" :value="0">
                    Inspiration
                </Statistic>
                <div class="w-1/2 invisible"></div>
                <l-cluster style="--justify: space-between">
                    <l-cluster el="label" class="flex flex-wrap w-3/12">
                        <span>Hit points</span>
                        <c-input
                            class="w-full"
                            type="number"
                            name="hitpoints"
                            :value="0"
                        />
                    </l-cluster>
                    <l-cluster el="label" class="flex flex-wrap w-3/12">
                        <span>Hit dice</span>
                        <span>d{{ 6 }}</span>
                        <c-input
                            class="w-full"
                            type="number"
                            name="hitDice"
                            :value="0"
                        />
                    </l-cluster>
                    <l-cluster el="label" class="flex flex-wrap w-3/12">
                        <span>Temp HP</span>
                        <c-input
                            class="w-full"
                            type="number"
                            name="temphp"
                            :value="0"
                        />
                    </l-cluster>
                </l-cluster>
                <l-stack>
                    <l-cluster>
                        <label>Resistances</label>
                        <l-reel><c-pill>charmed</c-pill></l-reel>
                    </l-cluster>
                    <l-cluster>
                        <label>Affects</label>
                        <l-reel><c-pill>poisoned</c-pill></l-reel>
                    </l-cluster>
                </l-stack>
                <l-cluster>
                    <h3>Death Save</h3>
                    <l-stack>
                        <l-cluster el="label">
                            <c-input type="checkbox"></c-input>
                            <c-input type="checkbox"></c-input>
                            <c-input type="checkbox"></c-input>
                            <span>Success</span>
                        </l-cluster>
                        <l-cluster el="label">
                            <c-input type="checkbox"></c-input>
                            <c-input type="checkbox"></c-input>
                            <c-input type="checkbox"></c-input>
                            <span>Failure</span>
                        </l-cluster>
                    </l-stack>
                </l-cluster>
            </l-cluster>
        </section>
        <section class="ability-scores">
            <h3>Ability Scores</h3>
            <l-grid>
                <AbilityScore
                    v-for="(value, key) in abilityScores"
                    :key="key"
                    v-bind="value"
                />
            </l-grid>
        </section>
        <section class="skills">
            <h3>Skills</h3>
            <l-grid>
                <Passive
                    v-for="passive in passives"
                    :key="passive.name"
                    :name="passive.name"
                    :ability-score="abilityScores[passive.ability]"
                    :modifiers="passive.modifiers"
                />
                <Passive name="Other" :ability-score="abilityScores.Wisdom" />
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
    </l-switcher>
</template>
<script lang="ts">
import { toRefs, defineComponent } from 'vue';
import AbilityScore from '@/components/abilityScores/abilityscore.vue';
import Statistic from '@/components/statistics/stat.vue';
import Passive from '@/components/skills/passive.vue';
import Skill from '@/components/skills/skill.vue';
import LGrid from '@/components/layout/grid.vue';
import LCluster from '@/components/layout/cluster.vue';
import LSwitcher from '@/components/layout/switcher.vue';
import LReel from '@/components/layout/reel.vue';
import LStack from '@/components/layout/stack.vue';
import CInput from '@/components/controls/input.vue';
import CPill from '@/components/controls/pill.vue';
import { useCharacterStore } from '@/stores/character';
import { toModifier } from '@/utils';

export default defineComponent({
    name: 'Character',
    components: {
        AbilityScore,
        Statistic,
        Passive,
        Skill,
        LGrid,
        LCluster,
        LSwitcher,
        LReel,
        LStack,
        CInput,
        CPill,
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
    /** grid-template-areas:
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
    } **/
}

.skills {
    grid-area: Skills;
}
.ability-scores {
    grid-area: AbilityScores;
}
.statistics {
    grid-area: Statistics;

    --gutter-width: 0;
}
.destiny {
    grid-area: Destiny;
}
</style>
