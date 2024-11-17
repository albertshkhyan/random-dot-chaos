/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',        // Include the root HTML file
        './src/**/*.{js,ts,jsx,tsx}', // Include all JavaScript/TypeScript files in `src`
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1d4ed8',    // Custom primary color
                secondary: '#9333ea',  // Custom secondary color
                accent: '#14b8a6',     // Additional accent color
                background: '#f9fafb', // Custom background color
                surface: '#ffffff',    // Custom surface color
                error: '#ef4444',      // Custom error color
                warning: '#f59e0b',    // Custom warning color
                success: '#10b981',    // Custom success color
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Primary font
                mono: ['Fira Code', 'monospace'], // Monospaced font
            },
            spacing: {
                '1/2': '50%', // Half of the container
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '4/5': '80%',
            },
            screens: {
                xs: '480px',   // Tiny devices
                sm: '640px',   // Small devices
                md: '768px',   // Medium devices
                lg: '1024px',  // Large devices
                xl: '1280px',  // Extra large devices
                '2xl': '1536px', // Double extra large devices
            },
            animation: {
                bounceSlow: 'bounce 3s infinite',
                fadeIn: 'fadeIn 1.5s ease-in-out',
                rotate: 'rotate 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
};
