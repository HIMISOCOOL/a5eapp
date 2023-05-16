import {
    getAbilityScore,
    type AbilityScore,
    type AbilityScoreArgs,
} from './abilityScore.factory';

/**
 * The proper string names of all the ability scores
 */
export const enum AbilityScoreName {
    Strength = 'Strength',
    Dexterity = 'Dexterity',
    Constitution = 'Constitution',
    Wisdom = 'Wisdom',
    Inteligence = 'Inteligence',
    Charisma = 'Charisma',
}

export type AbilityScoresArgs = Record<AbilityScoreName, AbilityScoreArgs>;

export type AbilityScoreKey = keyof AbilityScoresArgs;

export const getAbilityScores = <TAbilityScores extends AbilityScoresArgs>(
    abilityScores: TAbilityScores
) => {
    const completeScores = (
        Object.keys(abilityScores) as AbilityScoreName[]
    ).map((key: AbilityScoreName) => getAbilityScore(key, abilityScores[key]));

    /**
     * Turns array of ability scores into a map (object) of ability score keyed by name
     */
    return completeScores.reduce(
        (prev, curr) => ({ ...prev, [curr.name]: curr }),
        {} as Record<AbilityScoreName, AbilityScore<AbilityScoreName>>
    );
};
