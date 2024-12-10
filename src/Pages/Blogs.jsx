import React from 'react'
import Blog from '../components/Blog'
import Heading from '../components/Heading'
import { Helmet } from 'react-helmet-async'


const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget-Heaven | Blogs</title>
      </Helmet>
      <div className="bg-bannerBg pb-8 pt-4 ">
        <Heading
          title={"Latest New's"}
          subTitle={'Get inspired with our blogs, featuring deep dives into cutting-edge gadgets, expert advice, and everything you need to elevate your tech experience.'}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-screen-lg mx-auto">
        <Blog
          image={'https://i.ibb.co.com/n6nBz26/blog-01.jpg'}
          title={'Is the Future Wireless? Best Wireless Chargers for Your Gadgets'}
          date={'March 5, 2017'}
          comments={'35 Comments'}
          description={'Say goodbye to tangled cables! Explore the best wireless chargers available today, their features, and how they can simplify your life while keeping your gadgets charged efficiently'}
        />
        <Blog
          image={'https://i.ibb.co.com/SxLRWtJ/blog-02.jpg'}
          title={'How to Choose the Perfect Power Bank for Your Devices'}
          date={'March 5, 2017'}
          comments={'35 Comments'}
          description={'Power banks are a lifesaver, but not all are created equal. Learn about key factors like capacity, charging speed, and portability to ensure your devices stay powered wherever you go.'}
        />
        <Blog
          image={'https://i.ibb.co.com/HzGknnM/blog-03.jpg'}
          title={'Top 5 Smartwatches to Watch Out for in 2024'}
          date={'March 5, 2017'}
          comments={'35 Comments'}
          description={'Discover the latest advancements in smartwatch technology. From sleek designs to health monitoring features, explore the top picks for 2024 and find the perfect gadget to complement your lifestyle.'}
        />
      </div>
    </div>
  )
}

export default Blogs