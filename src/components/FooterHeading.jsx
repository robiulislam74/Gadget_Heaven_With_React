import React from 'react'

const FooterHeading = ({title,subTitle}) => {
  return (
    <div className='text-center space-y-3'>
      <h2 className='font-bold text-3xl'>{title}</h2>
      <p className='text-gray-500'>{subTitle}</p>
    </div>
  )
}

export default FooterHeading
