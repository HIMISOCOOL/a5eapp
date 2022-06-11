module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '60ch': '60ch',
            },
        },
    },
    plugins: [require('tailwindcss-logical')],
};
