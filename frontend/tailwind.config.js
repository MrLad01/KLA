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
    "./src/pages/SubPages/Pages4.jsx",
    "./src/pages/SubPages/Footer.jsx",
    "./src/pages/About SubPages/About1.jsx",
    "./src/pages/About SubPages/About2.jsx",
    "./src/pages/About SubPages/About3.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background1' : "url('./assets/img_2.jpg')",
        'background' : "url('./assets/img_1.png')",
        'aboutBack' : "url('./assets/About Page/background.png')",
        'aboutImg1' : "url('./assets/About Page/img 1.png')",
        'aboutImg2' : "url('./assets/About Page/img 2.png')",
        
      },
      height: {
        '86': '21.5rem',
        '88': '22rem',
        '100' : '25rem',
        '112' : '28rem',
        '144' : '36rem',
        '152': '38rem',
        '162': '40.5rem',
        '230': '57.5rem'
      },
      width: {
        '144': '36rem',
        '152' : '38rem',
        '176': '44rem'
      },
      colors: {
        'primary3' : '#024E82',
        'secondary3': '#47AEF5',
        'tertiary': '#3A3939',
        'gray4': '#555555',
        'gray5': '#1D1D1D',
        'footer': '#FBFBFB',
        'footerline': '#E8E8E8'
      },
      fontFamily:{
        lato: ['Lato'],
        arimo: ['Arimo'],
      },
    },
  },
  plugins: [],
}

