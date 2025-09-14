import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
        <h1 className='text-4xl font-bold lg:text-5xl'>{title}</h1>
        <p className='text-gray-400 text-xs'>{subtitle}</p>
    </div>
  )
}

export default Heading