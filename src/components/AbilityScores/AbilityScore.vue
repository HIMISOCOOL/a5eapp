<template>
    <div>
        <label :for="name">
            <h5>{{ name }}</h5>
        </label>
        <div>
            <input
                type="number"
                :name="abilityName"
                :id="abilityId"
                :value="value"
            />
            <input
                type="number"
                :name="abilityModName"
                :id="abilityModId"
                :value="abilityMod"
            />
        </div>
        <div>
            <label>
                <span>save</span>
                <input
                    type="number"
                    :name="abilitySaveName"
                    :id="abilitySaveId"
                    :value="save"
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    :name="abilityProfName"
                    :id="abilityProfId"
                    :value="proficient"
                />
                <small>Prof</small>
            </label>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { kebabCase } from 'lodash-es';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        saveBonus: {
            type: Number,
            required: true,
        },
        proficient: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        const state = reactive({
            abilityName: computed(() => `${props.name}Score`),
            abilityId: computed(() => `${kebabCase(props.name)}-score`),
            abilityMod: computed(() => toModifier(props.value)),
            abilityModName: computed(() => `${props.name}Mod`),
            abilityModId: computed(() => `${kebabCase(props.name)}-mod`),
            abilitySaveName: computed(() => `${props.name}Save`),
            abilitySaveId: computed(() => `${kebabCase(props.name)}-save`),
            abilityProfName: computed(() => `${props.name}Prof`),
            abilityProfId: computed(() => `${kebabCase(props.name)}-prof`),
        });
        const abilitySave = computed(
            () =>
                state.abilityMod + props.saveBonus + (props.proficient ? 2 : 0)
        );

        return {
            ...toRefs(state),
            abilitySave,
        };
    },
});
</script>
