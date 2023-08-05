import React from 'react'
import img1 from "../../assets/About Page/img 3.png"
import img2 from "../../assets/About Page/img 4.png"
import img3 from "../../assets/About Page/img 5.png"
import img4 from "../../assets/About Page/img 6.png"


const About3 = () => {
  return (
    <React.Fragment>
        <div className="footer h-152 w-full bg-footer mb-20 about3 pt-16">
            <header className='mb-20'>The Gallery</header>
            <div className='flex mx-20 gap-10'>
              <div className='grid'>
                <img src={img1} alt="" />
                <h4 className='mt-4 text-center text-gray5'>HM Jawad</h4>
              </div>
              <div className='grid'>
                <img src={img2} alt="" />
                <h4 className='mt-4 text-center text-gray5'>Furqan Abid</h4>
              </div>
              <div className='grid'>
                <img src={img3} alt="" />
                <h4 className='mt-4 text-center text-gray5'>Abdullah Ah</h4>
              </div>
              <div className='grid'>
                <img src={img4} alt="" />
                <h4 className='mt-4 text-center text-gray5'>Abrar Khan</h4>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About3
