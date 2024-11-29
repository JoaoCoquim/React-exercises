import './Product.css';

function Product({ product }) {

    const { image, name, description, price } = product;

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={image} />
            </div>

            <div className='product-name'>
                {name}
            </div>

            <div className='product-description'>
                {description}
            </div>

            <div className='product-price'>
                ${price}
            </div>

            <div className='shop-button'>
                Add To Cart
            </div>
        </div>
    )
}

export default Product;