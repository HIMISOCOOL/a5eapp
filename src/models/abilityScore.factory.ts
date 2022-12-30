import { computed, reactive } from 'vue';
import { toModifier } from '@/utils';

export type AbilityScoreArgs = {
    score: number;
    saveBonus: number;
    proficient: boolean;
    proficiencyBonus: number;
};

export type AbilityScore<TName extends string> = {
    name: TName;
    abbreviation: string;
    modifier: number;
    save: number;
} & AbilityScoreArgs;

export const getAbilityScore = <TName extends string>(
    name: TName,
    { proficiencyBonus, proficient, saveBonus, score }: AbilityScoreArgs
) => {
    const abbreviation = name.substring(0, 3).toUpperCase();
    const modifier = computed(() => toModifier(score));
    const save = computed(
        () => modifier.value + saveBonus + (proficient ? proficiencyBonus : 0)
    );

    return reactive({
        name,
        abbreviation,
        proficiencyBonus,
        proficient,
        saveBonus,
        score,
        modifier,
        save,
    });
};
