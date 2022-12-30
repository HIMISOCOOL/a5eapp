import type { AbilityScoreName } from './abilityScores.factory';

export type Passive = {
    name: string;
    ability: AbilityScoreName;
    modifiers: number[];
};
