import React from 'react'
import "./User.css"

function User({ user, eliminarUser }) {

    const handleClick = () => {
        eliminarUser(user.id)
    }

    return (
        <>
            <div className='user-data'>
                <div className='user-image'>
                    <img src={user.image} />
                </div>
                <div className='user-details'>
                    <div >
                        {user.name}
                    </div>
                    <div>
                        {user.age}
                    </div>
                    <div>
                        {user.position}
                    </div>
                </div>
            </div>
            <button
                className='delete-user-btn'
                onClick={handleClick}>
                Delete User
            </button>
        </>
    )
}

export default User