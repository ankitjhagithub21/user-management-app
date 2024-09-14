import React, { useEffect, useState } from 'react'
import axios from "axios"
import User from './User'
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}`)
            .then((res) => {
                setUsers(res.data.users)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className='container mx-auto my-5'>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sno.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => {
                            return (
                                <User key={user._id} user={user} index={index}/>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Users
