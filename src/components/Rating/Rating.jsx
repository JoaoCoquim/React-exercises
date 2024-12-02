import './Rating.css'

function Rating({ children }) {

    let rating = '☆☆☆☆☆';

    if (children >= 4.5) {
        rating = '★★★★★';
    } else if (children >= 3.5) {
        rating = '★★★★☆';
    } else if (children >= 2.5) {
        rating = '★★★☆☆';
    } else if (children >= 1.5) {
        rating = '★★☆☆☆';
    } else if (children >= 0.5) {
        rating = '★☆☆☆☆';
    }

    return (
        <div className="ratings">
            {rating}
        </div>
    )
}

export default Rating;