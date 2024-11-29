import './User.css'

function User(props) {

    //const user = props.user;
    const { user } = props;

    return (
        <div className='user'>
            <div className='info'>
                {user.name}
            </div>

            <div className='info'>
                {user.age}
            </div>

            <div className='info'>
                {user.position}
            </div>

            <div className='info'>
                <img src={user.image} />
            </div>
        </div>
    )
}

export default User;