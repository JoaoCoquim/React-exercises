import React from 'react'
import Rating from '../components/Rating/Rating'

function ExerciseRating() {

    return (
        <div className="rating-container">
            <Rating>0</Rating>
            <Rating>1.4</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
        </div>
    )
}

export default ExerciseRating