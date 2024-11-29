import './IdCard.css';

function IdCard({ idcard }) {

    const { lastName, firstName, gender, height, birth, picture } = idcard;

    return (
        <div className='id-card'>
            <div className='card-picture'>
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="data-container">
                <div className='card-firstName'>
                    <strong>First Name:</strong> {firstName}
                </div>
                <div className='card-lastName'>
                <strong>Last Name:</strong> {lastName}
                </div>
                <div className='card-gender'>
                <strong>Gender:</strong> {gender}
                </div>
                <div className='card-height'>
                <strong>Height:</strong> {height}
                </div>
                <div className='card-birth'>
                <strong>Birth:</strong> {new Date(birth).toDateString()}
                </div>
            </div>
        </div>
    )
}

export default IdCard;