import type { AbilityScoreName } from './abilityScores.factory';

export type Skill = {
    name: string;
    expertiseSources: number;
    proficient: boolean;
    proficiencyBonus: number;
    defaultAbility: AbilityScoreName;
    bonuses: number[];
    notes: string[];
};
