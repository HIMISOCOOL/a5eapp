import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', () => {
    const classes = ref([{ name: '', level: 0 }]);
    const character = reactive({
        name: '',
        experience: 0,
        level: computed(() =>
            classes.value.reduce((total, curr) => total + curr.level, 0)
        ),
        charClasses: classes,
        heratige: {
            name: '',
            traits: [''],
            gift: '',
        },
        culture: {
            name: '',
            traits: [''],
        },
        background: {
            name: '',
            traits: [''],
            connections: [''],
            momentos: [''],
        },
        destiny: {
            name: '',
            source: '',
            feature: '',
            fulfillment: '',
        },
        motivation: '',
    });

    return { character };
});
