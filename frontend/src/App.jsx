import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 md:px-[6vw] sm:px-[4vw]'>

      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/collection' element={<Collection/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App