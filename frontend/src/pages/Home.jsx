import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { useMeta } from '../hooks/useMeta'


const Home = () => {
  useMeta({
    title: "Home | Sphere E-Commerce Store",
    description: "Welcome to Sphere E-Commerce Store, your go-to destination for amazing products online.",
    keywords: "home, Sphere E-Commerce Store, e-commerce, products, shopping"
  });
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home