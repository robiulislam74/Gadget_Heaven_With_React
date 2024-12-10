import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Bar, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, Legend, Area, Line } from 'recharts';

const Statistics = () => {
  const data = [
    {
      "name": "Laptops",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Phones",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "MackBooks",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Watches",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Accessories",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },

  ]

  return (
    <>
      <Helmet>
        <title>Gadget-Heaven | Statistics</title>
      </Helmet>
      <div className='flex flex-col justify-center items-center mt-24'>
        <ComposedChart width={700} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar
            dataKey="pv" barSize={30} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>

      </div>
    </>
  )
}

export default Statistics
