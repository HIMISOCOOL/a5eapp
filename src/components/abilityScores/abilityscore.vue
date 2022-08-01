<template>
    <l-box>
        <output>{{ save }}</output>
        <l-box>
            <label>
                <input
                    type="text"
                    :value="score"
                    :name="name"
                    :id="name.toLowerCase()"
                />
                <span>{{ abbreviation }}</span>
            </label>
        </l-box>
        <output>{{ modifier }}</output>
        <input type="checkbox" :name="proficiencyName" :id="proficiencyId" />
    </l-box>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import LBox from '../layout/box.vue';
import { toModifier } from '../../utils/toModifier';

export default defineComponent({
    name: 'c-tab',
    components: {
        LBox,
    },
    props: {
        score: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        abbreviation: {
            type: String,
            required: true,
        },
        saveBonus: {
            type: Number,
            required: false,
            default: 0,
        },
        proficient: {
            type: Boolean,
            default: false,
            required: false,
        },
        proficiencyBonus: {
            type: Number,
            default: 0,
            required: false,
        },
    },
    setup(props, contexnt) {
        // hooks
        const data = reactive({
            proficiencyName: computed(() => `${props.name}Prof`),
            proficiencyId: computed(
                () => `${props.name.toLocaleLowerCase()}-prof`
            ),
            modifier: computed(() => toModifier(props.score)),
            save: computed(
                () =>
                    toModifier(props.score) +
                    props.saveBonus +
                    (props.proficient ? props.proficiencyBonus : 0)
            ),
        });
        // computed
        // methods
        // lifecycle
        return {
            ...toRefs(data),
        };
    },
});
</script>
<style scoped lang="postcss">

</style>
