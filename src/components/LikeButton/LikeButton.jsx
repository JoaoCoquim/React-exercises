import React, { useState } from 'react'
import './LikeButton.css'

function LikeButton() {

    const [likes, setLikes] = useState(0);
    const cores = ['purple', 'blue', 'green', 'yellow', 'orange']

    const handleClick = () => {
        setLikes(likes + 1)
    }

    const getColor = () => {
        /*if(likes === 1){
            return cores[0]
        } else {
            return cores[1]
        }*/
        return cores[likes % cores.length]
    }

    return (
        <button style={{
            backgroundColor: getColor()
        }} onClick={handleClick}>
            {likes}
            &nbsp;
            {likes === 1 ? 'Like' : 'Likes'}
        </button>
    )
}

export default LikeButton;