import './CreditCard.css'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

    const formatCardNumber = (cardNumber) => {

        const maskedNumber = cardNumber.slice(0, -4).replace(/\d/g, '●') + cardNumber.slice(-4);

        return maskedNumber.match(/.{1,4}/g).join(' ');
    }

    const formattedCardNumber = formatCardNumber(number);

    const formattedYear = expirationYear.toString().slice(-2);

    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            <div className="card-type">
                <img id="card-logo" src={type} />
            </div>
            <div className="card-number">
                {formattedCardNumber}
            </div>
            <div className="card-details">
                <div className="card-info">
                    Expires {formattedMonth} / {formattedYear}
                    <span className="card-bank">{bank}</span>
                </div>
                <div className="card-owner">
                    {owner}
                </div>
            </div>
        </div>
    )

}

export default CreditCard;