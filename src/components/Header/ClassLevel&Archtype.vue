<template>
    <div class="p-4">
        <fieldset
            v-for="charClass in charClasses"
            :key="charClass.id"
            class="w-full flex flex-row justify-between"
        >
            <input
                type="text"
                name="ClassName"
                id="class-name"
                placeholder="Class"
                :value="charClass.className"
                class="w-full"
            />
            <input
                type="text"
                name="Archtype"
                id="archtype"
                placeholder="Archtype"
                :value="charClass.archtype"
                class="w-full"
            />
            <input
                type="number"
                name="Level"
                id="level"
                placeholder="Level"
                :value="charClass.level"
                class="w-full"
            />
        </fieldset>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        charClasses: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        return {};
    },
});
</script>
