import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Project = () => {
  return (
      <div className='mt-20'>
          <h2 className='text-6xl font-bold text-blue-500  text-center'>Projects</h2>
          <div className='flex items-center justify-around my-32'>
              <Card />
              <Card />
              <Card />
          </div>
          <Link to='/projects'>
          <div className='flex items-center justify-center mt-20'>
              <button className='text-white bg-blue-500 rounded py-2 px-6 w-max capitalize'>view all Project</button>
              </div>
          </Link>
         
    </div>
  )
}

export default Project
