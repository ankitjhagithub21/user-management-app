import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`)
        const data = await res.json()
        if(res.ok){
          setUser(data.user)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getUser()

  }, [])

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     try{
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/update/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      const data = await res.json()
      if(data.success){
        toast.success(data.message)
        navigate("/")
      }else{
        toast.error(data.message)
      }
     }catch(error){
      console.log(error)
     }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <p>User not found.</p>
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
            value={user.name}
            onChange={handleChange}
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
            value={user.phone}
            onChange={handleChange}
            placeholder='Enter phone number'
            required
         
            
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default UpdateUser
