import React from 'react'
import IdCard from '../components/IdCard/IdCard'
import idcards from '../assets/id-cards.json'

function ExerciseIdCard() {

    return (
        <div className='App'>
            {idcards.map((card) => (
                <IdCard key={card.id} idcard={card} />
            ))}
        </div>
    )
}

export default ExerciseIdCard