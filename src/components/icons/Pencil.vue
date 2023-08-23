<template>
    <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="16.6169"
            y="4.59644"
            width="6"
            height="17"
            transform="rotate(45 16.6169 4.59644)"
            :fill="fill"
        />
        <rect
            x="20.8595"
            y="0.35376"
            width="6"
            height="4"
            transform="rotate(45 20.8595 0.35376)"
            :fill="fill"
        />
        <path
            d="M2.47471 22.9812L3.77855 17.3907L8.06516 21.6773L2.47471 22.9812Z"
            :fill="fill"
        />
    </svg>
</template>
<script setup lang="ts">
defineProps({
    fill: {
        type: String,
        default: 'black',
    },
});
</script>
