import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Passive from './passive.vue';

export default {
    title: 'Page/Character/Passive',
    component: Passive,
} as Meta<typeof Passive>;

const Template: StoryFn = args =>
    defineComponent({
        components: { 'c-passive': Passive },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-passive v-bind="args"></c-passive>`,
    });

export const _Passive = {
    render: Template,

    args: {
        name: 'Stealth',
        abilityScore: {
            score: 13,
            name: 'Dexterity',
            abbreviation: 'DEX',
            saveBonus: 1,
            proficient: false,
            proficiencyBonus: 2,
        },
        modifiers: [],
    },
};

export const WithBonus = {
    render: Template,

    args: {
        ..._Passive.args,
        modifiers: [5],
    },
};
