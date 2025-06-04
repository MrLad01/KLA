import React from 'react'
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/shop');
  }
  return (
    <React.Fragment>
        <div className = 'bg-background h-[36rem] md:h-152 w-full bg-cover page-1 flex items-center justify-center flex-col gap-6 md:gap-10 px-4'>
        {/* <h1> HANDMADE PERFECTION</h1> */}
        <h1 className='absolute top-24 md:top-36 text-center text-xl md:text-2xl lg:text-3xl leading-tight'> STYLIST PICKS BEAT <br /> THE HEAT </h1>
        <button className = ' border-2 md:border-4 border-white py-1.5 md:py-2 px-4 md:px-5 mt-[32rem] md:mt-16 hover:text-base hover:py-2 md:hover:py-2.5 hover:px-5 md:hover:px-6 hover:transition duration-200 hover:transition-delay-100 flex text-sm md:text-base' onClick={handleClick}> SHOP NOW </button>
      </div>
    </React.Fragment>
  )
}

export default Page1