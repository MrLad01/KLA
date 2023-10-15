import React from 'react'
import img1 from "../../assets/About Page/img 7.png"
import img2 from "../../assets/About Page/img 8.png"
import img3 from "../../assets/About Page/img 9.png"
import quotes from "../../assets/About Page/qoutation.png"

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className = "testimonial h-360 w-full">
        
        <header> <h1> Testimonial </h1> </header>
        
        <div className = 'mx-56 grid mt-16 gap-y-28'>
            
            <div className = "flex">
                <img src = { img1 } alt = "" />
                <div className = 'ml-8'>
                    <img src = { quotes } alt = "" />
                    <p className = "mt-2">
                        Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.
                    </p>
                    <h3 className = "mt-6"> Stacy </h3>
                </div>
            </div>

            <div className = "flex">
                <img src = { img2 } alt = "" />
                <div className = 'ml-8'>
                    <img src = { quotes } alt = "" />
                    <p className = "mt-2">
                        I ordered 5 shirts from them and received them in no time. The customer support was awesome!
                    </p>
                    <h3 className = "mt-6"> Tiffany </h3>
                </div>
            </div>
            
            <div className = "flex">
                <img src = { img3 }  alt = "" />
                <div className = 'ml-8'>
                    <img src = { quotes } alt = "" />
                    <p className = "mt-2">
                        I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.
                    </p>
                    <h3 className = "mt-6"> James </h3>
                </div>
            </div>

            <div className = "flex">
                <img src = { img1 } alt = "" />
                <div className = 'ml-8'>
                    <img src = { qoutes } alt = "" />
                    <p className = "mt-2">
                        Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.
                    </p>
                    <h3 className = "mt-6"> Stacy </h3>
                </div>
            </div>
            
        </div>
      </div>
    </React.Fragment>
  )
}

export default Testimonial
