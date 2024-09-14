import React from 'react'
import Users from './Users'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mx-auto my-5'>
        <Link to={"/create"} className='btn btn-success'>Create User</Link>
      <Users/>
    </div>
  )
}

export default Home
