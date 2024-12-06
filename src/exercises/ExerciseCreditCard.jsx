import React from 'react'
import CreditCard from '../components/CreditCard/CreditCard'

function ExerciseCreditCard() {

    return (
        <div className='credit-card-container'>
            <CreditCard
                type="./public/images/visa.png"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white"
            />

            <CreditCard
                type="./public/images/master-card.png"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222"
            />

            <CreditCard
                type="./public/images/visa.png"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2028}
                bank="ActivoBank"
                owner="João Coquim"
                bgColor="#ddbb55"
                color="white"
            />
        </div>
    )
}

export default ExerciseCreditCard