import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import {
    AbilityScoreName,
    getAbilityScores,
} from '@/models/abilityScores.factory';
import type { Skill } from '@/models/skill.factory';
import type { Passive } from '@/models/passive.factory';

export const useCharacterStore = defineStore('character', () => {
    const classes = ref([{ name: '', level: 0 }]);
    const level = computed(() =>
        classes.value.reduce((total, curr) => total + curr.level, 0)
    );
    const proficiencyBonus = computed(() => {
        // TODO: this is dumb surely theres a way to math this
        switch (level.value) {
            case 1:
            case 2:
            case 3:
            case 4:
                return 2;
            case 5:
            case 6:
            case 7:
            case 8:
                return 3;
            case 9:
            case 10:
            case 11:
            case 12:
                return 4;
            case 13:
            case 14:
            case 15:
            case 16:
                return 5;
            case 17:
            case 18:
            case 19:
            case 20:
                return 6;
            default:
                return 0;
        }
    });

    const abilityScores = getAbilityScores({
        Strength: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
        Dexterity: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
        Constitution: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
        Wisdom: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
        Inteligence: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
        Charisma: reactive({
            score: 0,
            saveBonus: 0,
            proficient: false,
            proficiencyBonus,
        }),
    });

    const skills: Skill[] = reactive([
        reactive({
            name: 'Deception',
            expertiseSources: 0,
            proficient: false,
            proficiencyBonus,
            defaultAbility: AbilityScoreName.Charisma,
            bonuses: [] as number[],
            notes: [] as string[],
        }),
    ]);

    const passives: Passive[] = reactive([
        {
            name: 'Stealth',
            ability: AbilityScoreName.Dexterity,
            modifiers: [],
        },
        {
            name: 'Perception',
            ability: AbilityScoreName.Wisdom,
            modifiers: [],
        },
        {
            name: 'Insight',
            ability: AbilityScoreName.Wisdom,
            modifiers: [],
        },
    ]);

    const character = reactive({
        name: '',
        experience: 0,
        level,
        charClasses: classes,
        heratige: {
            name: '',
            traits: [''],
            gift: '',
        },
        culture: {
            name: '',
            traits: [''],
        },
        background: {
            name: '',
            traits: [''],
            connections: [''],
            momentos: [''],
        },
        destiny: {
            name: '',
            source: '',
            feature: '',
            fulfillment: '',
        },
        motivation: '',
        proficiencyBonus,
        abilityScores,
        passives,
        skills,
    });

    return { character };
});
