module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            flexGrow: {
                999: '999',
            },
            spacing: {
                '60ch': '60ch',
                half: '50%',
            },
        },
    },
    plugins: [require('tailwindcss-logical')],
};
