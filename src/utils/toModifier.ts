/**
 * @param abilityScore The ability score to map
 * @returns The score modifier
 */
export function toModifier(abilityScore: number) {
    return Math.floor((abilityScore - 10) / 2);
}
