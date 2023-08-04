import React from 'react'
import icon1 from "../../assets/Home Page 3 icons/icon 1.png"
import icon2 from "../../assets/Home Page 3 icons/icon 2.png"
import icon3 from "../../assets/Home Page 3 icons/icon 3.png"
import icon4 from "../../assets/Home Page 3 icons/icon 4.png"

const Page3 = () => {
  return (
    <React.Fragment>
      <div className='page-3 h-152 w-full pt-10'>
        <div className='grid grid-cols-4 grid-rows-1 mx-20 pl-7'>
            <div className='flex'>
                <img src={icon1} alt="" />
                <div className='grid'>
                    <h4>FREE DELIVERY</h4>
                    <h5>Enjoy Delivery from anywhere nationwide</h5>   
                </div>
            </div>
            <div className='flex'>
                <img src={icon2} alt="" />
                <div className='grid'>
                    <h4>SUPPORT 24/7</h4>
                    <h5>Our support team is there to help you for enquiries</h5>
                </div>
            </div>
            <div className='flex'>
                <img src={icon3} alt="" />
                <div className='grid'>
                    <h4>30 DAYS RETURN</h4>
                    <h5>Simply return it within 30 days of an exchange</h5>
                </div>
            </div>
            <div className='flex'>
                <img src={icon4} alt="" />
                <div className='grid'>
                    <h4>100% PAYMENT SECURE</h4>
                    <h5>Our payments are secured with 256 bit encryption</h5>
                </div>
            </div>
        </div>
        <div className='flex mx-20 h-100 mt-16 gap-5'>
            <div className='h-full bg-primary3 w-full rounded-2xl'></div>
            <div className='h-full bg-secondary3 w-176 rounded-2xl'></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page3
