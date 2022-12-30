import type { Story, Meta } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Passive from './passive.vue';

export default {
    title: 'Page/Character/Passive',
    component: Passive,
} as Meta;

const Template: Story = args =>
    defineComponent({
        components: { 'c-passive': Passive },
        setup() {
            return {
                args,
            };
        },
        template: String.raw`<c-passive v-bind="args"></c-passive>`,
    });

export const _Passive = Template.bind({});
_Passive.args = {
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
};

export const WithBonus = Template.bind({});
WithBonus.args = {
    ..._Passive.args,
    modifiers: [5],
};
