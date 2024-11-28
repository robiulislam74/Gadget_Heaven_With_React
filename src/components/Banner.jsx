import React from 'react'
import Heading from './Heading'
import { useNavigate, useNavigation } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
   <div className='px-7'>
     <div className='bg-bannerBg py-4 rounded-b-3xl'>
      <Heading
        title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
        subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
      />
      {/* <Button onClick={()=>navigate('/dashboard')} name={'Shop Now'}/> */}
      <div className='text-center mt-6 pb-52'>
        <button onClick={()=>navigate('/dashboard')} className="btn rounded-full text-bannerBg">Shop Now</button>
      </div>
      <div className='w-8/12 h-[450px]  absolute -bottom-56 right-56 border-2 border-white p-6 bg-white/10 rounded-3xl'>
      <div className='w-full h-full bg-bannerImg bg-center bg-cover position-center rounded-3xl'>

      </div>
      </div>
    </div>
   </div>
  )
}

export default Banner
