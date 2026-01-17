import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-open-sans)", "sans-serif"],
                sora: ["var(--font-sora)", "sans-serif"],
            },
            colors: {
                /* --------------------------------------------------
                 * 1. BRAND CORE (Do not change lightly)
                 * -------------------------------------------------- */
                core: {
                    neon: "#1AFF00",
                    green: "#0E6F1A",
                    black: "#181818",
                    white: "#FFFFFF",
                },

                /* --------------------------------------------------
                 * 2. BRAND ACCENTS
                 * -------------------------------------------------- */
                accent: {
                    lime: "#D7FF00",
                    cyan: "#00D4FF",
                    purple: "#7A00FF",
                    red: "#FF1744",
                    orange: "#FF7A00",
                    pink: "#FF3FA4",
                    aqua: "#00F0FF",
                },

                /* --------------------------------------------------
                 * 3. SEMANTIC COLORS (Enterprise standard)
                 * -------------------------------------------------- */
                semantic: {
                    primary: "#1AFF00",      // maps to core.neon
                    secondary: "#00D4FF",    // maps to accent.cyan

                    success: "#22C55E",
                    warning: "#FACC15",
                    danger: "#FF1744",
                    info: "#38BDF8",
                },

                /* --------------------------------------------------
                 * 4. SURFACES (Layouts, cards, modals)
                 * -------------------------------------------------- */
                surface: {
                    background: "#0B0B0B",
                    base: "#121212",
                    elevated: "#1A1A1A",
                    overlay: "rgba(0,0,0,0.6)",
                    inverted: "#FFFFFF",
                },

                /* --------------------------------------------------
                 * 5. TEXT COLORS (Accessibility-focused)
                 * -------------------------------------------------- */
                text: {
                    primary: "#FFFFFF",
                    secondary: "#A3A3A3",
                    muted: "#737373",
                    inverse: "#181818",
                    accent: "#1AFF00",
                    danger: "#FF1744",
                },

                /* --------------------------------------------------
                 * 6. BORDER & DIVIDER COLORS
                 * -------------------------------------------------- */
                border: {
                    DEFAULT: "#262626",
                    subtle: "#1F1F1F",
                    strong: "#404040",
                    focus: "#1AFF00",
                },

                /* --------------------------------------------------
                 * 7. INTERACTIVE STATES
                 * -------------------------------------------------- */
                state: {
                    hover: "rgba(255,255,255,0.06)",
                    active: "rgba(255,255,255,0.12)",
                    disabled: "#525252",
                    focus: "#1AFF00",
                },

                /* --------------------------------------------------
                 * 8. DATA VISUALIZATION (Charts, dashboards)
                 * -------------------------------------------------- */
                chart: {
                    1: "#1AFF00",
                    2: "#00D4FF",
                    3: "#7A00FF",
                    4: "#FF7A00",
                    5: "#FF3FA4",
                    6: "#D7FF00",
                },
            },
            animation: {
                "gradient-shift": "gradient-shift 8s ease infinite",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
                "scale-in": "scale-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            },
            keyframes: {
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "fade-in-up": {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.5) rotate(-45deg)" },
                    to: { opacity: "1", transform: "scale(1) rotate(0deg)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;