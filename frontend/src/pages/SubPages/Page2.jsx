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
      <div className = 'page-2 w-full h-230 pt-10'>
        <header> <h1 className='mb-10'> Discover New Bags </h1></header>
        
        <div className = 'grid grid-cols-4 grid-rows-2 gap-16 w-full px-20'>    
            <div className = 'flex flex-col justify-center'>
                <img src = { img1 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Plain White Shirt </h4>
                <h5 className = 'text-center -ml-6'> $29.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img2 }  alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Demin Jacket </h4>
                <h5 className = 'text-center -ml-6'> $69.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img3 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Black Polo Shirt </h4>
                <h5 className = 'text-center -ml-6'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img4 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Blue Sweatshirt </h4>
                <h5 className = 'text-center -ml-6'> $79.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img5 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Blue Plain Shirt </h4>
                <h5 className = 'text-center -ml-6'> $49.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img6 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Dark Blue Shirt </h4>
                <h5 className = 'text-center -ml-6'> $89.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img7 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Outcast T-shirt </h4>
                <h5 className = 'text-center -ml-6'> $19.00 </h5>
            </div>

            <div className = 'flex flex-col justify-center'>
                <img src = { img8 } alt = "" className = 'w-64 h-72 justify-self-center' />
                <h4 className = 'text-center -ml-6'> Polo Plain Shirt </h4>
                <h5 className = 'text-center -ml-6'> $29.00 </h5>
            </div>
            
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page2
