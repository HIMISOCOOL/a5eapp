import type { StoryFn, Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import AbilityScore from './abilityscore.vue';

const meta: Meta<typeof AbilityScore> = {
    title: 'Page/Character/Ability Score',
    component: AbilityScore,
};

export default meta;

type Story = StoryObj<typeof AbilityScore>;

const Template: StoryFn<typeof AbilityScore> = args =>
    defineComponent({
        components: { 'c-ability-score': AbilityScore },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-ability-score v-bind="args"></c-ability-score>`,
    });

export const _AbilityScore: Story = {
    render: Template,

    args: {
        score: 13,
        name: 'Strength',
        abbreviation: 'STR',
        saveBonus: 1,
        proficient: false,
        proficiencyBonus: 2,
    },
};

export const Proficient: Story = {
    render: Template,

    args: {
        ..._AbilityScore.args,
        name: 'Constitution',
        abbreviation: 'CON',
        saveBonus: 0,
        proficient: true,
    },
};

export const Negative: Story = {
    render: Template,

    args: {
        ..._AbilityScore.args,
        score: 9,
        name: 'Wisdom',
        abbreviation: 'WIS',
        saveBonus: 0,
    },
};
