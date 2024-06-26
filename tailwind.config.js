export const content = ['./src/**/*.{js,jsx,ts,tsx}'];

export default {
    theme: {
        extend: {
            animation: {
                "loop-scroll": "loop-scroll 25s linear infinite",
                "reverse-loop-scroll": "reverse-loop-scroll 25s linear infinite"
            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" }
                },
                "reverse-loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(100%)" }
                }
            },
        },
    },
    plugins: [],
};
