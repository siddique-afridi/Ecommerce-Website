import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium '>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title

// WE CAN USE THIS COMPONENT Multiple times in the project
// just import it in the required component then:
// use the props and give them values like >>> <Title text1={anything} text2={anything} />