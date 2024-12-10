import React from 'react'
import FooterHeading from './FooterHeading'

const Footer = () => {
  return (
    <div className='mt-24 bg-white pt-16 pb-8'>
        <FooterHeading
            title={'Gadget Heaven'}
            subTitle={'Leading the way in cutting-edge technology and innovation.'}
        />
      <div className='divider px-32'></div>
      <footer className="footer text-base-content px-32 pb-8">
        <nav className='mx-auto'>
            <h6 className="text-lg font-bold">Services</h6>
            <a className="link link-hover text-gray-500">Branding</a>
            <a className="link link-hover text-gray-500">Design</a>
            <a className="link link-hover text-gray-500">Marketing</a>
            <a className="link link-hover text-gray-500">Advertisement</a>
        </nav>
        <nav className='mx-auto'>
            <h6 className="text-lg font-bold">Company</h6>
            <a className="link link-hover text-gray-500">About us</a>
            <a className="link link-hover text-gray-500">Contact</a>
            <a className="link link-hover text-gray-500">Jobs</a>
            <a className="link link-hover text-gray-500">Press kit</a>
        </nav>
        <nav className='mx-auto'>
            <h6 className="text-lg font-bold">Legal</h6>
            <a className="link link-hover text-gray-500">Terms of use</a>
            <a className="link link-hover text-gray-500">Privacy policy</a>
            <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
</footer>
    </div>
  )
}

export default Footer
