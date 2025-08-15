import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./resources/css/**/*.css",
    ],

    theme: {
        extend: {
            fontFamily: {
                "lato-regular": ["Lato-Regular", "serif"],
                "lato-bold": ["Lato-Bold", "serif"],
                "lato-italic": ["Lato-Italic", "serif"],
            },
            colors: {
                primary: "#0240b7",
                "button-hover": "aliceblue",
                text: "#212121",
                card: "#eef2fc",
                "button-disabled": "#cecdcc",
                "button-error": "#cfd2de",
                "input-error": "#ab3a68",
            },
            screens: {
                xs: "576px",
                sm: "768px",
                md: "1024px",
            },
            transitionTimingFunction: {
                custom: "cubic-bezier(0.25, 0.8, 0.25, 1)",
            },
            transitionDuration: {
                400: "0.4s",
            },
            borderRadius: {
                custom: "15px",
                "2xl": "16px",
            },
            boxShadow: {
                custom: "5px 5px 5px 0 rgba(0, 0, 0, 0.25)",
                modal: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
            },
        },
    },

    plugins: [forms],
};
