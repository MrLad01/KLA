import React from 'react'
import img1 from "../../assets/About Page/img 7.png"
import img2 from "../../assets/About Page/img 8.png"
import img3 from "../../assets/About Page/img 9.png"
import quotes from "../../assets/About Page/qoutation.png"

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className = "testimonial h-auto min-h-360 w-full py-12 sm:py-16 md:py-20">
        
        <header> 
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 sm:mb-12 md:mb-16"> Reviews </h1> 
        </header>
        
        <div className = 'mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-56 grid mt-8 sm:mt-12 md:mt-16 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-28'>
            
            <div className = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                <img src = { img1 } alt = "" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full flex-shrink-0" />
                <div className = 'text-center sm:text-left'>
                    <img src = { quotes } alt = "" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mb-2" />
                    <p className = "mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.
                    </p>
                    <h3 className = "mt-4 sm:mt-6 font-bold text-base sm:text-lg md:text-xl text-primary3"> Stacy </h3>
                </div>
            </div>

            <div className = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                <img src = { img2 } alt = "" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full flex-shrink-0" />
                <div className = 'text-center sm:text-left'>
                    <img src = { quotes } alt = "" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mb-2" />
                    <p className = "mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        I ordered 5 shirts from them and received them in no time. The customer support was awesome!
                    </p>
                    <h3 className = "mt-4 sm:mt-6 font-bold text-base sm:text-lg md:text-xl text-primary3"> Tiffany </h3>
                </div>
            </div>
            
            <div className = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                <img src = { img3 }  alt = "" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full flex-shrink-0" />
                <div className = 'text-center sm:text-left'>
                    <img src = { quotes } alt = "" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mb-2" />
                    <p className = "mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.
                    </p>
                    <h3 className = "mt-4 sm:mt-6 font-bold text-base sm:text-lg md:text-xl text-primary3"> James </h3>
                </div>
            </div>

            <div className = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                <img src = { img1 } alt = "" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full flex-shrink-0" />
                <div className = 'text-center sm:text-left'>
                    <img src = { quotes } alt = "" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mb-2" />
                    <p className = "mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.
                    </p>
                    <h3 className = "mt-4 sm:mt-6 font-bold text-base sm:text-lg md:text-xl text-primary3"> Stacy </h3>
                </div>
            </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Testimonial