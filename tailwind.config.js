/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#065056",
                secondary: "#6F6F6F",
                third: "#798194",
                btnColor: "#095052",
                diagramText: " #11959f",
                optionsText: "#626262",
            },
            boxShadow: {
                cardShadow: "0 12px 58px 0 rgba(0, 71, 255, 0.11)",
            },
            fontFamily: {},
        },
    },
    plugins: [],
};
