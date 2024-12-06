import React from 'react'
import Product from '../components/Product/Product'
import product from '../assets/product.json'

function ExerciseProduct() {

    return (
        <div className='Product'>
            <Product product={product} />
        </div>
    )
}

export default ExerciseProduct