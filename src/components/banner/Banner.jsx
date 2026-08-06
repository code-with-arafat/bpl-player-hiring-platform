import React from 'react'
import backgroundImage from '../../assets/bg-shadow.png'
import bannerImage from '../../assets/banner-main.png'

export default function Banner() {
  return (
    <div className="w-7xl h-125 mx-auto my-5 bg-cover bg-no-repeat bg-[#131313] rounded"
    style={{backgroundImage:`url(${backgroundImage})`}}
    >
        <div className='flex flex-col justify-center items-center mx-auto h-125'>
            <img src={bannerImage} alt="Banner Image" className='' />
            <h2 className='text-3xl text-white font-bold pt-5'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-xl text-gray-400 p-5'>Beyond Boundaries Beyond Limits</p>
            <button className='bg-[#E7FE29] text-black font-bold px-5 py-3 rounded-xl border-2 border-black ring-2 ring-[#E7FE29] ring-offset-2 ring-offset-black'>Claim Free Credit</button>
        </div>

    </div>
  )
}
