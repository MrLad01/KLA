import React from 'react'

const Page1 = () => {
  return (
    <React.Fragment>
        <div className = 'bg-background h-152 w-full bg-cover page-1 flex items-center justify-center flex-col'>
        {/* <h1> HANDMADE PERFECTION</h1> */}
        <h1 className='-mt-16'> STYLIST PICKS BEAT <br /> THE HEAT </h1>
        <button className = 'border-4 border-white py-2 px-5 mt-16 hover:text-base hover:py-2.5 hover:px-6  hover:transition duration-200 hover:transition-delay-100'> SHOP NOW </button>
      </div>
    </React.Fragment>
  )
}

export default Page1
