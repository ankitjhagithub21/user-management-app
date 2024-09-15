
import {Link} from "react-router-dom"
const User = ({ user, index ,handleDeleteUser}) => {
    
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
