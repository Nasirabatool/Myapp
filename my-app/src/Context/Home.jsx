import React from 'react'
import { useAuth } from '../Context/AuthContext'

const Home = () => {
  const {name}=useAuth()
  return (
    <div className='home '>
      <div className="home-container py-3 px-4 w-[100%] h-80 bg-green-800 relative">
        <p>Wellcome {name}</p>
      </div>
      <div className="container py-3 px-4 w-[100%]  absolute bottom-7 ">
        <div className="boxes flex justify-center items-center gap-4  ">
        <div className="box py-2 px-3 w-[25%] rounded-2xl shadow-md bg-white">
         <h1 className='text-xl text-gray-600 font-bold text-center underline py-3 px-4' >Heading</h1>
         <p className='py-3 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat autem quis mollitia. Sed at ad illum dolore exercitationem corrupti reiciendis modi corporis sint blanditiis? Id maiores repellendus cum minima.</p>
         <button className='mx-auto py-3 px-4 rounded-2xl text-white bg-green-800 hover: cursor-pointer'>Read More</button>
        </div>
        <div className="box py-2 px-3 w-[25%] rounded-2xl shadow-md bg-white">
         <h1 className='text-xl text-gray-600 font-bold text-center underline py-3 px-4' >Heading</h1>
         <p className='py-3 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat autem quis mollitia. Sed at ad illum dolore exercitationem corrupti reiciendis modi corporis sint blanditiis? Id maiores repellendus cum minima.</p>
         <button className='mx-auto py-3 px-4 rounded-2xl text-white bg-green-800 hover: cursor-pointer '>Read More</button>
        </div>
        <div className="box py-2 px-3 w-[25%] rounded-2xl shadow-md bg-white">
         <h1 className='text-xl text-gray-600 font-bold text-center underline py-3 px-4' >Heading</h1>
         <p className='py-3 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat autem quis mollitia. Sed at ad illum dolore exercitationem corrupti reiciendis modi corporis sint blanditiis? Id maiores repellendus cum minima.</p>
         <button className='mx-auto py-3 px-4 rounded-2xl text-white bg-green-800 hover: cursor-pointer hover:translate-0.5'>Read More</button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default Home
