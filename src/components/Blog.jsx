import React from 'react'
import { BiImage } from 'react-icons/bi';
import { FaCalendarAlt, FaComments } from "react-icons/fa";

const Blog = ({image,title,date,comments,description}) => {
  return (
    <div className="max-w-sm mx-auto border rounded-lg overflow-hidden shadow-md">
        {/* Image */}
        <img
          src={image} // Replace with the actual image URL
          alt="Repairshop"
          className="w-full h-48 object-cover"
        />
  
        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {title}
          </h3>
  
          {/* Meta Info */}
          <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <FaComments className="mr-1" />
              <span>{comments}</span>
            </div>
          </div>
  
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
  
          {/* Read More */}
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline text-sm"
          >
            READ MORE
          </a>
        </div>
      </div>
  )
}

export default Blog