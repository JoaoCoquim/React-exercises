import './Random.css';

function Random(props) {

    const { min, max } = props;

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className='random-generator'>
            {`Random value between ${min} and ${max} => ${random}`}
        </div>
    )
}

export default Random;