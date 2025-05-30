import React from 'react'
import img1 from '../../assets/Home Page 4 images/img 1.png'
import img2 from '../../assets/Home Page 4 images/img 2.png'
import img3 from '../../assets/Home Page 4 images/img 3.png'
import img4 from '../../assets/Home Page 4 images/img 4.png'

const Pages4 = () => {
  return (
    <React.Fragment>
      <div className = "page-4 w-full min-h-162 flex flex-col justify-center py-8 md:py-12">
        <header> <h1 className = 'text-center text-xl md:text-2xl lg:text-3xl mb-4'> Special Packages </h1> </header>
        
        <h3 className = 'text-center text-gray4 mb-8 md:mb-6 text-sm md:text-base px-4'>Browse our Special Packages</h3>
        
        <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto w-full px-4 md:px-8 lg:px-12 xl:px-20 gap-6 md:gap-8 lg:gap-10'>
            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img1 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Gray Polo Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img2 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Red Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $69.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img3 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Polo White Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $29.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img4 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Pink Casual Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $39.00 </h5>
            </div>
        </div>

        <button className = 'text-white bg-primary3 h-12 md:h-16 w-32 md:w-36 mr-auto ml-auto rounded-md mt-8 md:mt-16 text-sm md:text-base font-semibold hover:bg-opacity-90 transition-colors'> SEE MORE </button>
      </div>
    </React.Fragment>
  )
}

export default Pages4