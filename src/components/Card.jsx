import React from 'react'

const Card = () => {
  return (
      <div className='w-[300px] h-[200px] flex items-center justify-center flex-col space-y-4 my-16 mx-10'>
          <img src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded' alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit non quis omnis accusamus corrupti temporibus nesciunt. Voluptatem iusto, lique.</p>
          <button className='text-white bg-blue-500 rounded p-2 w-max capitalize'>see details</button>
    </div>
  )
}

export default Card
