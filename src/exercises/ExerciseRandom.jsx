import React from 'react'
import Random from '../components/Random/Random'

function ExerciseRandom() {

    return (
        <div className='App'>
            <Random min={1} max={6} />
            <Random min={1} max={100} />
        </div>
    )
}

export default ExerciseRandom