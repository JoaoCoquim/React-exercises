import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './UserPage.css'

function UserPage(props) {

    const { users } = props
    const { userId } = useParams()

    // Encontrar o primeiro user com o ID do URL.
    const user = users.find(user => user.id == userId)

    return (
        <div className='App'>
            {!user
                ? <div style={{ color: red }}>404 - User not Found</div>
                : <div className='user'>
                    <div className="userImg">
                        <img src={user.image} />
                    </div>
                    <div className="userDetails">
                        <p><strong>Name: </strong>{user.name}</p>
                        <p><strong>Age: </strong>{user.age}</p>
                        <p><strong>Position: </strong>{user.position}</p>
                    </div>
                    <Link to={`/`}>
                        <button className="returnBtn">Return</button>
                    </Link>
                </div>}
        </div>
    )
}

export default UserPage