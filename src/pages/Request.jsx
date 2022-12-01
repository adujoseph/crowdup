import React, { useState } from 'react'

const Request = () => {
    const [inputFile, setInputFile] = useState({
        name: '',
        desc: '',
        goal: '',
        interest:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputFile({
            ...inputFile,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
      <div className='flex items-center justify-center flex-col space-y-5 my-10'>
          <h2 className='text-4xl font-bold text-blue-500  text-center capitalize'>make a request</h2>
          <form className='flex justify-center flex-col space-y-5 w-[400px]'>
              <div className='flex justify-center flex-col space-y-2'>
                <label htmlFor="name" className='label'>name</label>
                <input type="text" onChange={handleChange}  className='input'  name="name" />
              </div>
              <div className='flex justify-center flex-col space-y-2'>
                <label htmlFor="desc" className='label'>description</label>
                <input type="text" onChange={handleChange}  className='input' name="desc" />
              </div>
              <div className='flex justify-center flex-col space-y-2'>
                <label htmlFor="goal" className='label'>goal</label>
                <input type="text" onChange={handleChange}  className='input' name="goal" />
              </div>
              <div className='flex justify-center flex-col space-y-2'>
                <label htmlFor="interest" className='label'>interest</label>
                <input type="text" onChange={handleChange} className='input'  name="interest" />
              </div>
              <button onClick={handleSubmit} className='text-white bg-blue-500 rounded p-2 w-full capitalize text-sm'>send</button>
          </form>
    </div>
  )
}

export default Request
