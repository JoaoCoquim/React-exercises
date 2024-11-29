import "./Button.css";

function Button(props) {

    const { user } = props;

    return (
        <>
            <button className="user-button">
                <img src={user.image} />
                <div className="user-button_info">
                    <p className="user-button_title">{user.name}, {user.age}</p>
                    <p className="user-button_subtitle">{user.position}</p>
                </div>
            </button>
        </>
    )
}

export default Button;