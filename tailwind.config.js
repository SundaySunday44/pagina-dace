module.exports = {
    content: ["./src/**/*.{html,js}"],

    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 2s ease-in-out',
                'slide-in': 'slideIn 1.5s ease-in-out',
                'bounce': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-50%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
            },
            colors: {
                'azul-container': '#207EA6',
                'azul-container-2': '4EB5CF',
                'gray-container': '3E3E3E',
                'gray-7A7A7A': '#F2F2F2',
                'gray-full': '#0000009E'
            },

        },
    },
    plugins: [],
};