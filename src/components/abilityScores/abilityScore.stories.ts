import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import AbilityScore from './abilityscore.vue';

export default {
    title: 'Controls/Ability Score',
    component: AbilityScore,
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { 'c-ability-score': AbilityScore },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-ability-score v-bind="args"></c-ability-score>`,
    });

export const _AbilityScore = Template.bind({});
_AbilityScore.args = {
    score: 13,
    name: 'Strength',
    abbreviation: 'STR',
    saveBonus: 1,
    proficient: false,
    proficiencyBonus: 2,
};

export const Proficient = Template.bind({});
Proficient.args = {
    ..._AbilityScore.args,
    name: 'Constitution',
    abbreviation: 'CON',
    saveBonus: 0,
    proficient: true,
};

export const Negative = Template.bind({});
Negative.args = {
    ..._AbilityScore.args,
    score: 9,
    name: 'Wisedom',
    abbreviation: 'WIS',
    saveBonus: 0,
};