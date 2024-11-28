import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div className='w-7/12 text-center mx-auto text-white space-y-5'>
      <h2 className='font-bold text-4xl leading-snug'>{title}</h2>
      <p className=' text-center mx-auto'>{subTitle}</p>
    </div>
  )
}

export default Heading
