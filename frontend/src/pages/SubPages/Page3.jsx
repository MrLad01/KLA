import React from 'react'
import icon1 from "../../assets/Home Page 3 icons/icon 1.png"
import icon2 from "../../assets/Home Page 3 icons/icon 2.png"
import icon3 from "../../assets/Home Page 3 icons/icon 3.png"
import icon4 from "../../assets/Home Page 3 icons/icon 4.png"

const Page3 = () => {
  return (
    <React.Fragment>
      <div className = 'page-3 min-h-152 w-full pt-6 md:pt-10 pb-6'>
        
        <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-6 lg:gap-0 mx-4 md:mx-10 lg:mx-20 pl-0 lg:pl-7'>
            <div className = 'flex items-center gap-3 md:gap-4'>
                <img src = { icon1 } alt = "" className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                <div className = 'grid'>
                    <h4 className="text-sm md:text-base font-bold mb-1"> FREE DELIVERY </h4>
                    <h5 className="text-xs md:text-sm text-gray-600"> Enjoy Delivery from anywhere nationwide </h5>   
                </div>
            </div>

            <div className = 'flex items-center gap-3 md:gap-4'>
                <img src = { icon2 } alt = "" className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                <div className = 'grid'>
                    <h4 className="text-sm md:text-base font-bold mb-1"> SUPPORT 24/7 </h4>
                    <h5 className="text-xs md:text-sm text-gray-600"> Our support team is there to help you for enquiries </h5>
                </div>
            </div>

            <div className = 'flex items-center gap-3 md:gap-4'>
                <img src = { icon3 } alt = "" className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                <div className = 'grid'>
                    <h4 className="text-sm md:text-base font-bold mb-1"> 30 DAYS RETURN </h4>
                    <h5 className="text-xs md:text-sm text-gray-600"> Simply return it within 30 days of an exchange </h5>
                </div>
            </div>

            <div className = 'flex items-center gap-3 md:gap-4'>
                <img src = { icon4 } alt = "" className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                <div className = 'grid'>
                    <h4 className="text-sm md:text-base font-bold mb-1"> 100% PAYMENT SECURE </h4>
                    <h5 className="text-xs md:text-sm text-gray-600"> Our payments are secured with 256 bit encryption </h5>
                </div>
            </div>
        </div>

        <div className = 'flex flex-col lg:flex-row w-full px-4 md:px-6 lg:px-10 h-auto lg:h-100 mt-8 md:mt-12 lg:mt-16 gap-4 md:gap-5 page-32'>
            <div className = 'h-64 md:h-80 lg:h-full bg-primary3 w-full rounded-2xl justify-center items-center flex flex-col px-6 py-8 text-center'>
                <header> <h1 className="text-lg md:text-xl lg:text-2xl mb-4"> PEACE OF MIND </h1> </header>
                <p className="text-sm md:text-base mb-6 leading-relaxed"> A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind. </p>
                <button className = 'text-primary3 bg-white px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors'> ORDER NOW </button>
            </div>

            <div className = 'h-64 md:h-80 lg:h-full bg-secondary3 w-full lg:w-176 rounded-2xl justify-center items-center flex flex-col px-6 py-8 text-center'>
                <header> <h1 className="text-lg md:text-xl lg:text-2xl mb-4"> BUY 2, GET 1 FREE </h1> </header>
                <p className="text-sm md:text-base mb-6 leading-relaxed"> End of season sale. Buy any 2 items of your choice and get 1 free. </p>
                <button className = 'text-secondary3 bg-white px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors'> ORDER NOW </button>
            </div>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Page3