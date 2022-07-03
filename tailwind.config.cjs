module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            border: {
                1: '1px',
            },
            flexGrow: {
                999: '999',
            },
            spacing: {
                '1em': '1em',
                '60ch': '60ch',
                half: '50%',
            },
        },
    },
    plugins: [require('tailwindcss-logical')],
};
