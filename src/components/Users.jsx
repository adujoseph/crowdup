import React from 'react'
import Board from './Board'

const Users = () => {
  
     return (
        <div className='mt-20'>
            <h2 className='text-6xl font-bold text-blue-500  text-center capitalize'>leader board</h2>
            <div className='flex items-center justify-around my-32'>
                <Board />
                <Board />
                <Board />
            </div>
            <div className='flex items-center justify-center '>
                 <button className='text-white bg-blue-500 rounded py-2 px-6 w-max capitalize'>all users</button>
            </div>

        </div>
  )
}

export default Users
