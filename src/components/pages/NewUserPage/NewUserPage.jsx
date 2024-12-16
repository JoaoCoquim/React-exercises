import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './NewUserPage.css'

function NewUserPage({ users, setUsers }) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [position, setPosition] = useState("")

    const navigate = useNavigate()

    const getNextId = () => {
        users.sort((a, b) => a.id - b.id)
        const lastUser = users[users.length - 1]
        return lastUser.id + 1
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: getNextId(),
            name,
            age,
            position,
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
        }

        setUsers([...users, newUser])
        navigate("/")
    }

    return (
        <div className="newUser-container">
            <h1>Create New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input
                        type="text"
                        name='age'
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="position">Position: </label>
                    <input
                        type="text"
                        name='position'
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                </div>
                <button type="submit" value={"Create User"} className="saveBtn">Save</button>
            </form>
            <Link to={"/"} className="returnBtn">Return</Link>
        </div>
    )
}

export default NewUserPage