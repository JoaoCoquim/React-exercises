import './DriverCard.css';

function DriverCard({ name, rating, img, car }) {

    const { model, licensePlate } = car;

    if (rating >= 4.5) {
        rating = '★★★★★';
    } else if (rating >= 3.5) {
        rating = '★★★★☆';
    } else if (rating >= 2.5) {
        rating = '★★★☆☆';
    } else if (rating >= 1.5) {
        rating = '★★☆☆☆';
    } else if (rating >= 0.5) {
        rating = '★☆☆☆☆';
    }

    return (
        <div className='driverCards'>
            <div className="driverCard-image">
                <img id="img" src={img} />
            </div>
            <div className="driverCard-details">
                <div className="driverCard-name">
                    <strong>{name}</strong>
                </div>
                <div className="driverCard-rating">
                    {rating}
                </div>
                <div className="driverCard-car-info">
                    {model} - {licensePlate}
                </div>
            </div>
        </div>
    )
}

export default DriverCard;