<template>
    <header class="grid grid-cols-5 grid-rows-2 gap-2">
        <img
            class="col-span-2 p-4"
            src=""
            alt="Level up Advanced 5th Edition"
        />
        <class-level-archtype class="col-span-2" :charClasses="[{}]" />
        <experience-block />
        <name-block class="col-span-2" />
        <heritage-block />
        <culture-block />
        <background-block />
    </header>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import NameBlock from './NameBlock.vue';
import ClassLevelArchtype from './ClassLevel&Archtype.vue';
import ExperienceBlock from './ExperienceBlock.vue';
import HeritageBlock from './HeritageBlock.vue';
import CultureBlock from './CultureBlock.vue';
import BackgroundBlock from './BackgroundBlock.vue';

export default defineComponent({
    components: {
        NameBlock,
        ClassLevelArchtype,
        ExperienceBlock,
        HeritageBlock,
        CultureBlock,
        BackgroundBlock,
    },
    setup() {
        const state = reactive({
            charClasses: [{}],
        });
        return {
            ...toRefs(state),
        };
    },
});
</script>
