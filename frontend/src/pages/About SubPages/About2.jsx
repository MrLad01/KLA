import React from 'react'
import { useNavigate } from 'react-router-dom';

const About2 = () => {
  const navigate = useNavigate();
        const handleClick = () => {
          navigate('/shop');
        }
  return (      
    <React.Fragment>
       
       <div className = 'mx-4 sm:mx-8 md:mx-12 lg:mx-20 flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 justify-center items-center'>
            <div className = 'bg-shop object-cover h-72 sm:h-80 md:h-96 lg:h-144 w-full sm:w-80 md:w-96 lg:w-144 items-end flex justify-center bg-contain bg-center'>
                <button onClick={handleClick} className = 'bg-white text-primary3 flex relative bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-primary3 hover:text-white transition-all duration-300'> ORDER NOW </button>
            </div>

            <div className = 'bg-leather h-72 sm:h-80 md:h-96 lg:h-144 w-full sm:w-80 md:w-96 lg:w-144 items-end flex justify-center bg-fill bg-center'>
                <button onClick={handleClick} className = 'bg-white text-primary3 flex relative bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-primary3 hover:text-white transition-all duration-300'> ORDER NOW </button>
            </div>

        </div> 

    </React.Fragment>
  )
}

export default About2