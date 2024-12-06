import React from 'react'
import Button from '../components/Button/Button'
import users from '../assets/users.json'

function ExerciseButton() {

    return (
        <div>
            {users.map(user => <Button user={user} />)}
        </div>
    )
}

export default ExerciseButton