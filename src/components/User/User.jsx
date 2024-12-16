import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css"

function User({ user, deleteUser }) {

    const handleClick = () => {
        deleteUser(user.id)
    }

    return (
        <>
            <div className='user-data'>
                <div className='user-image'>
                    <Link to={`/${user.id}`}>
                        <img src={user.image} />
                    </Link>
                </div>
                <div className='user-details'>
                    <Link to={`/${user.id}`}>
                        <div >
                            {user.name}
                        </div>

                        <div>
                            {user.age}
                        </div>
                        <div>
                            {user.position}
                        </div>
                    </Link>
                </div>
            </div>
            <button
                className='deleteBtn'
                onClick={handleClick}>
                Delete
            </button>
        </>
    )
}

export default User