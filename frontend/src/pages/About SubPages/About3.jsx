import React from 'react'
import img1 from "../../assets/About Page/img 3.png"
import img2 from "../../assets/About Page/img 4.png"
import img3 from "../../assets/About Page/img 5.png"
import img4 from "../../assets/About Page/img 6.png"


const About3 = () => {
  return (
    <React.Fragment>
        <div className = "footer h-auto min-h-152 w-full bg-footer mb-12 sm:mb-16 md:mb-20 about3 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
            <header> 
              <h1 className = 'mb-12 sm:mb-16 md:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'> The Gallery </h1> 
            </header>
        
            <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-6 sm:gap-8 md:gap-10'>
              <div className = 'grid justify-items-center'>
                <img src = { img1 } alt = "" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md" />
                <h4 className = 'mt-3 sm:mt-4 text-center text-gray5 text-sm sm:text-base font-medium'> HM Jawad </h4>
              </div>

              <div className = 'grid justify-items-center'>
                <img src = { img2 } alt = "" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md" />
                <h4 className = 'mt-3 sm:mt-4 text-center text-gray5 text-sm sm:text-base font-medium'> Furqan Abid </h4>
              </div>

              <div className = 'grid justify-items-center'>
                <img src = { img3 } alt = "" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md" />
                <h4 className = 'mt-3 sm:mt-4 text-center text-gray5 text-sm sm:text-base font-medium'> Abdullah Ah </h4>
              </div>

              <div className = 'grid justify-items-center'>
                <img src = { img4 } alt = "" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md" />
                <h4 className = 'mt-3 sm:mt-4 text-center text-gray5 text-sm sm:text-base font-medium'> Abrar Khan </h4>
              </div> 

            </div>
        </div>
    </React.Fragment>
  )
}

export default About3