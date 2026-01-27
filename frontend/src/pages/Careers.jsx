import React from 'react'
import underWay from '../assets/under-way.webp'

const Careers = () => {
  return (
    
    <div
      style={{ backgroundImage: `url(${underWay})` }}
      className="h-[650px] bg-cover relative flex bg-[position:50%_90%] items-center justify-center py-10 "
    >
    {/* MAIN TEXT */}
      <h1 className="relative text-8xl font-semibold font-serif text-transparent
        bg-gradient-to-r from-black via-slate-500 to-gray-400
        bg-200% bg-clip-text animate-shimmer">
        Coming Soon
      </h1>

      {/* SHADOW / REFLECTION */}
      <h1
        aria-hidden="true"
        className="absolute top-[69%] text-6xl font-light text-slate-400
          blur-sm transform scale-y-50 skew-x-6 translate-y-20 animate-shadowShimmer"
      >
        Coming Soon
      </h1>
    </div>

  )
}

export default Careers
