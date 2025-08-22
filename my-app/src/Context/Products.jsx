import React from 'react'
import Cards from './Cards'

export const products = [
  {
    id: 1,
    name: 'Airports pro',
    category: 'Airports',
    price: '$108',
    image: '/image/airports.png'  
  },
  {
    id: 2,
    name: 'Smart watch',
    category: 'Watch',
    price: '$99',
    image: '/image/iphone.jfif' 
  }, 
  {
    id: 4,
    name: 'ipad pro',
    category: 'Tablet',
    price: '$999 ',
    image: '/image/ipad.jpg'    
  }
]

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className='text-green-800 md:text-red-500 lg:text-blue-600 font-bold font-mono text-3xl text-center underline mb-10 pt-2'>
        OUR PRODUCTS
      </h1>
      <div className="products gap-6 mx-auto flex flex-wrap">
        {products.map((product) => (
          <Cards key={product.id} {...product}/>   
        ))}
      </div>
    </div>
  )
}

export default Products

