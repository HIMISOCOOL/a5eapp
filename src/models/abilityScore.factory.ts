import { computed, reactive } from 'vue';
import { toModifier } from '@/utils';

/**
 * The portable information of an ability score
 */
export type AbilityScoreArgs = {
    score: number;
    /**
     * The save bonus for this ability,
     * to add to the modifier calculated from the @see score
     */
    saveBonus: number;
    proficient: boolean;
    /**
     * The bonus for being proficient
     */
    proficiencyBonus: number;
};

export type AbilityScore<TName extends string = string> = {
    /**
     * The name of the ability score.
     *
     * _note: this is a generic because we want to be able to get the exact string in TS_
     */
    readonly name: TName;
    /**
     * The first three letters of the name in uppercase
     */
    readonly abbreviation: string;
    /**
     * The modifier calculated from the score @see toModifier
     */
    readonly modifier: number;
    /**
     * The ability save value,
     * calculated from modifier + saveBonus + proficiencyBonus
     */
    readonly save: number;
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
