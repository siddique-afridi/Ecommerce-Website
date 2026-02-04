import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center relative bg-gay-100 py-4 pt-7 bg-gray-100'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full px-6 py-3 sm:flex-1 outline-none ' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>
        </form>
        <div className='absolute w-full h-16 bg-gradient-to-t pointer-events-none from-gray-200 to-transparent right-0  bottom-0'></div>

    </div>
  )
}

export default NewsletterBox