import React from 'react'
import img1 from '../../assets/Home Page 2 images/img 1.png'
import img2 from '../../assets/Home Page 2 images/img 2.png'
import img3 from '../../assets/Home Page 2 images/img 3.png'
import img4 from '../../assets/Home Page 2 images/img 4.png'
import img5 from '../../assets/Home Page 2 images/img 5.png'
import img6 from '../../assets/Home Page 2 images/img 6.png'
import img7 from '../../assets/Home Page 2 images/img 7.png'
import img8 from '../../assets/Home Page 2 images/img 8.png'


const Page2 = () => {
  return (
    <React.Fragment>
      <div className = 'page-2 w-full min-h-230 pt-6 md:pt-10 pb-6'>
        <header> <h1 className='mb-6 md:mb-10 text-center text-xl md:text-2xl lg:text-3xl px-4'> Discover New Bags </h1></header>
        
        <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-8 md:gap-12 lg:gap-16 w-full px-4 md:px-8 lg:px-12 xl:px-20'>    
            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img1 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Plain White Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $29.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img2 }  alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Demin Jacket </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $69.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img3 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Black Polo Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img4 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Blue Sweatshirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $79.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img5 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Blue Plain Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img6 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Dark Blue Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $89.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img7 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Outcast T-shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $19.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center items-center'>
                <img src = { img8 } alt = "" className = 'w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
                <h4 className = 'text-center mt-2 text-sm md:text-base'> Polo Plain Shirt </h4>
                <h5 className = 'text-center text-sm md:text-base font-semibold'> $29.00 </h5>
            </div>
            
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page2