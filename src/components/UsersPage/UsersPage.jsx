import React from 'react'
import { Link } from 'react-router-dom'
import User from './../../components/User/User'
import './UsersPage.css'

function UsersPage(props) {

    const { users, setUsers } = props

    const deleteUser = (idParaEliminar) => {
        let usersCopy = [...users] // Cópia de users
        usersCopy = usersCopy.filter(user => user.id !== idParaEliminar) // Eliminar User
        setUsers(usersCopy)
    }

    return (
        <div className='user-list'>
            <h2>User List</h2>
            {users.map(user => (
                <div key={user.id}>
                    <User deleteUser={deleteUser} user={user} />
                    <Link to={`/edit/${user.id}`}>
                        <button className="editBtn">Edit User</button>
                    </Link>
                </div>
            ))}
            <Link to={`/new`}><button className="addBtn">Add User</button></Link>
        </div>
    )
}

export default UsersPage