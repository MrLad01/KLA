import React from 'react'
import Page1 from './SubPages/Page1'
import Page2 from './SubPages/Page2'
import Page3 from './SubPages/Page3'
import Page4 from './SubPages/Pages4'



const Home = () => {
  return (
    <div >
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <div className = 'w-full h-32'></div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
