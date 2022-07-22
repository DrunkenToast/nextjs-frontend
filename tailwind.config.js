/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1f1c17',
                'secondary': {
                    500: '#57432b',
                    700: '#3d3020',
                    900: '#2a2319'
                },
                'success': {
                    200: '#d6e6b5',
                    900: '#3d4b27',
                },
                'danger': {
                    900: '#9b2c20',
                    200: '#cf928b',
                }
            }
        },
    },
    plugins: [],
}
