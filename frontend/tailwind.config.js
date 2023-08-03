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
        'background' : "url('./assets/img_1.png')",
      },
      height: {
        '152' : "38rem ",
        '162' : '40.5rem'
      }
    },
  },
  plugins: [],
}

