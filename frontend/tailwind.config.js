/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layout/Nav.jsx",
    "./src/pages/About.jsx",
    "./src/pages/Contact.jsx",
    "./src/pages/Home.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_BjhUu6BpUZA.jpg')",
      },
    },
  },
  plugins: [],
}

