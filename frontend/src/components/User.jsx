import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import {Link} from "react-router-dom"
const User = ({ user, index }) => {
    const handleDeleteUser = async(userId) =>{
        const res = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete/${userId}`)
        
        if(res.status===200){
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }
       
    }
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td className='d-flex gap-2'>
                    <button className='btn btn-danger' onClick={()=>handleDeleteUser(user._id)}>Delete</button>
                    <Link className='btn btn-info' to={`/update/${user._id}`}>Update</Link>
                </td>
            </tr>
        </>
    )
}

export default User
