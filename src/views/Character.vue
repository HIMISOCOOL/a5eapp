<template>
    <main class="grid grid-cols-5">
        <section class="ability-scores col-span-1">Ability Scores</section>
        <section class="statistics col-span-1">Statistics</section>
        <section class="destiny col-span-3">Destiny</section>
        <section class="skills col-span-3">Skills</section>
    </main>
</template>
<style scoped>
main {
    grid-template-areas:
        'AbilityScores Statistics Destiny Destiny Destiny'
        'AbilityScores Statistics Skills Skills Skills'
        'AbilityScores Statistics Skills Skills Skills';
}

.skills {
    grid-area: Skills;
}
.ability-scores {
    grid-area: AbilityScores;
}
.statistics {
    grid-area: Statistics;
}
.destiny {
    grid-area: Destiny;
}
</style>
