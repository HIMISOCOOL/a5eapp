<template>
    <l-box class="ability-score">
        <label class="save">
            <small>Save</small>
            <l-box el="output" :for="name.toLocaleLowerCase()" class="output">
                {{ save }}
            </l-box>
        </label>
        <l-box class="value">
            <label>
                <input
                    type="text"
                    :value="score"
                    :name="name"
                    :id="name.toLowerCase()"
                />
                <small>{{ abbreviation }}</small>
            </label>
        </l-box>
        <label class="modifier">
            <small>Mod</small>
            <l-box el="output" :for="name.toLocaleLowerCase()" class="output">
                {{ modifier }}
            </l-box>
        </label>
        <input
            type="checkbox"
            :name="proficiencyName"
            :id="proficiencyId"
            class="proficient"
        />
    </l-box>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import LBox from '../layout/box.vue';
import { toModifier } from '../../utils/toModifier';

export default defineComponent({
    name: 'c-ability-score',
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
    setup(props, context) {
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
.ability-score {
    @apply border-solid border-black relative;
    .save,
    .modifier {
        @apply flex items-center w-full absolute;
        & > .output {
            --background-color: #d9d9d9;
            --padding-block: 0px;
            --padding-inline: 1.5rem;
            @apply flex border-black w-4 justify-center;
        }
    }
    .value {
        --border-width: 0px;
        & > label {
            @apply flex flex-col items-center w-full;
            & > input {
                @apply pli-2 text-center;
            }
        }
    }
    .save {
        @apply flex-col -top-8 left-0;
        & > .output {
            --border-width: 4px;
        }
    }
    .modifier {
        @apply flex-col-reverse -bottom-8 left-0;
        & > .output {
            /* width:  */
        }
    }
    .proficient {
        @apply absolute -top-2 -right-2;
    }
}
</style>
