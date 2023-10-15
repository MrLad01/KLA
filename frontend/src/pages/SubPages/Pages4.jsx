import React from 'react'
import img1 from '../../assets/Home Page 4 images/img 1.png'
import img2 from '../../assets/Home Page 4 images/img 2.png'
import img3 from '../../assets/Home Page 4 images/img 3.png'
import img4 from '../../assets/Home Page 4 images/img 4.png'

const Pages4 = () => {
  return (
    <React.Fragment>
      <div className = "page-4 w-full h-162 flex flex-col justify-center">
        <header> <h1 className = 'text-center'> Special Packages </h1> </header>
        
        <h3 className = 'text-center text-gray4 mb-6'>Browse our Special Packages</h3>
        
        <div className = 'grid grid-cols-4 grid-rows-1 mx-20'>
            <div className = 'flex flex-col justify'>
                <img src = { img1 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-9'> Gray Polo Shirt </h4>
                <h5 className = 'text-center -ml-10'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify'>
                <img src = { img2 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-9'> Red Shirt </h4>
                <h5 className = 'text-center -ml-10'> $69.00 </h5>
            </div>

            <div className = 'flex flex-col justify'>
                <img src = { img3 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-9'> Polo White Shirt </h4>
                <h5 className = 'text-center -ml-10'> $29.00 </h5>
            </div>

            <div className = 'flex flex-col justify'>
                <img src = { img4 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Pink Casual Shirt </h4>
                <h5 className = 'text-center -ml-10'> $39.00 </h5>
            </div>
        </div>

        <button className = 'text-white bg-primary3 h-16 w-36 mr-auto ml-auto rounded-md mt-16 '> SEE MORE </button>
      </div>
    </React.Fragment>
  )
}

export default Pages4
