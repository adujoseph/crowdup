import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Users from '../components/Users'

const Home = ({ handleConnect }) => {
  
  return (
      <div>
          <Hero handleConnect={handleConnect} />
          <Project />
          <div className='w-[90%] mx-auto h-0.5 bg-blue-500 my-16'/>
          <Users />
    </div>
  )
}

export default Home
