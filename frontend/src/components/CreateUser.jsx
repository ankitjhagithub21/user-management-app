import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const CreateUser = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const obj = Object.fromEntries(data.entries())
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/create`, obj)
      
      if (response.data) {
        toast.success(response.data.message)
        e.target.reset() 
      } else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log('Error creating user:', error)
      toast.error('Failed to create user')
    }
  }

  return (
    <div className='col-md-8 mx-auto px-3 py-5'>
      <h2 className='mb-3'>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder='Enter username'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            placeholder='Enter phone number'
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateUser
