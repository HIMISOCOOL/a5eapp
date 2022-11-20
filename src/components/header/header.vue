<template>
    <header class="grid grid-cols-5 gap-3">
        <l-cluster class="col-span-2">
            <div class="picture w-full relative">
                <img
                    src=""
                    alt=""
                    class="row-span-4 border-4 border-black rounded-full w-28 h-28"
                />
                <button
                    disabled
                    class="bg-slate-600 text-white rounded-full absolute bottom-0 right-3 w-9 h-9"
                >
                    edit
                </button>
            </div>
            <l-switcher class="justify-between">
                <c-input type="text" :value="name" placeholder="Name" />
                <c-input
                    type="number"
                    :value="level"
                    placeholder="Level"
                    class="w-2/5"
                />
                <c-input
                    type="number"
                    :value="exp"
                    placeholder="EXP"
                    class="w-2/5"
                />
            </l-switcher>
        </l-cluster>
        <l-cluster class="col-span-3">
            <c-input
                type="text"
                :value="race"
                placeholder="Race"
                class="w-full"
            />
            <c-input
                type="text"
                :value="heratige"
                placeholder="Heratige"
                class="w-full"
            />
            <c-input
                type="text"
                :value="culture"
                placeholder="Culture"
                class="w-full"
            />
            <c-input
                type="text"
                :value="background"
                placeholder="Background"
                class="w-full"
            />
            <c-input
                type="text"
                :value="destiny"
                placeholder="Destiny"
                class="w-full"
            />
        </l-cluster>
        <l-reel class="w-full col-span-full">
            <c-pill
                v-for="charClass in charClasses"
                :key="charClass.name"
                class="bg-slate-500"
            >
                <span>{{ charClass.name }}</span>
                <span>&nbsp;:&nbsp;</span>
                <span>{{ charClass.level }}</span>
            </c-pill>
        </l-reel>
    </header>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import LCluster from '../layout/cluster.vue';
import LSwitcher from '../layout/switcher.vue';
import LReel from '../layout/reel.vue';
import CInput from '../controls/input.vue';
import CPill from '../controls/pill.vue';

export default defineComponent({
    name: 'c-header',
    components: {
        'l-switcher': LSwitcher,
        'l-cluster': LCluster,
        'l-reel': LReel,
        'c-input': CInput,
        'c-pill': CPill,
    },
    setup() {
        const state = reactive({
            charClasses: [
                { name: 'Bard', level: 1 },
                { name: 'Bard', level: 1 },
                { name: 'Bard', level: 1 },
                { name: 'Bard', level: 1 },
                { name: 'Bard', level: 1 },
                { name: 'Bard', level: 1 },
            ],
            race: '',
            heratige: '',
            culture: '',
            background: '',
            destiny: '',
            name: '',
            level: 1,
            exp: 0,
        });
        return {
            ...toRefs(state),
        };
    },
});
</script>
<style lang="postcss">
header {
    .c-input {
        --padding-block: 0px;
    }
    .l-cluster {
        --gutter-width: theme('spacing.3');
    }
    .l-reel.l-box {
        --padding-block: theme('spacing.2');
        .c-pill {
            --padding-block: 0px;
            --padding-inline: theme('spacing.4');
        }
    }
}
</style>
