/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/About.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Contact.jsx",
    "./src/layout/Nav.jsx"
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
