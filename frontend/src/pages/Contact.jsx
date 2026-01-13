import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { ShopContext } from '../context/ShopContext'

const Contact = () => {
  const {navigate} = useContext(ShopContext)

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='flex my-10 flex-col md:flex-row justify-center gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>street 2, building 117 <br />Bahria Town, Rawalpindi, Pakistan</p>
          <p className='text-gray-500'>Tel: +92 337908xxxx <br />Email: clientmail@sphere.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button onClick={()=>navigate('/careers')} className='border border-black px-8 bg-gray-700 text-white py-4 text-sm hover:bg-orange-600 hover:rounded-lg transition-all active:bg-gray-700'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact