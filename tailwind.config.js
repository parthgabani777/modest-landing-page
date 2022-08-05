module.exports = {
    content: ["./dist/*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#23b7a4",
                secondary: "#3a454d",
                header: "#1d2126",
            },
            container: {
                screens: {
                    sm: "600px",
                    md: "728px",
                    lg: "984px",
                    xl: "1240px",
                    "2xl": "1140px",
                },
            },
            fontFamily: {
                "open-sens": "Open Sans",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
