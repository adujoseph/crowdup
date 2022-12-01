import React from 'react'
import Card from '../components/Card'

const Projects = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-6xl font-bold text-blue-500  text-center capitalize'>all Projects</h2>
            <div className='grid grid-cols-4 gap-4 mx-auto my-32'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Projects
