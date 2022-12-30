import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Skill from './skill.vue';

export default {
    title: 'Page/Character/Skill',
    component: Skill,
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { 'c-skill': Skill },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-skill v-bind="args"></c-skill>`,
    });

export const _Skill = Template.bind({});
_Skill.args = {
    name: 'Deception',
    expertiseSources: 0,
    proficient: false,
    proficiencyBonus: 2,
    defaultAbility: {
        score: 13,
        name: 'Charisma',
        abbreviation: 'CHA',
        saveBonus: 1,
        proficient: false,
        proficiencyBonus: 2,
    },
    bonuses: [],
    notes: ['Default note'],
};

export const Proficient = Template.bind({});
Proficient.args = {
    ..._Skill.args,
    proficient: true,
};

export const Expertise = Template.bind({});
Expertise.args = {
    ..._Skill.args,
    expertiseSources: 1,
};
