/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layout/Nav.jsx",
    "./src/pages/About.jsx",
    "./src/pages/Contact.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/SubPages/Page1.jsx",
    "./src/pages/SubPages/Page2.jsx",  
    "./src/pages/SubPages/Page3.jsx",
    "./src/pages/SubPages/Page4.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background1' : "url('./assets/img_2.jpg')",
        'background' : "url('./assets/img_1.png')",
      },
      height: {
        '100' : '25rem',
        '152': '38rem',
        '162': '40.5rem',
        '230': '57.5rem'
      },
      width: {
        '176': '44rem'
      },
      colors: {
        'primary3' : '#024E82',
        'secondary3': '#47AEF5',
        'tertiary': '#3A3939'
      },
      fontFamily:{
        lato: ['Lato'],
        arimo: ['Arimo'],
      },
    },
  },
  plugins: [],
}

