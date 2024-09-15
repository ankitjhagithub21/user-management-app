import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import toast from 'react-hot-toast';

const Users = () => {
    const [users, setUsers] = useState([]);
   

    // Fetch users on component mount
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}`)
            .then((res) => {
                setUsers(res.data.users);
                
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to fetch users');
            });
    }, []);

   
    // Handle user deletion
    const handleDeleteUser = async (userId) => {
        try {
            const res = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete/${userId}`);

            // Update the state after a successful delete
            if (res.status === 200) {
                toast.success(res.data.message);
                const updatedUsers = users.filter((user) => user._id !== userId);
                setUsers(updatedUsers);
               
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete user');
        }
    };

    return (
        <div className="container mx-auto my-5">
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
                    {users.map((user, index) => (
                        <User
                            key={user._id}
                            user={user}
                            index={index}
                            handleDeleteUser={handleDeleteUser}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
