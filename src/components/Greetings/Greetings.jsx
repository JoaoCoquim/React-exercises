import "./Greetings.css";

function Greetings(props) {

    const { lang } = props;

    let greeting;

    if (lang === 'de') {
        greeting = 'Hallo';
    } else if (lang === 'de') {
        greeting = 'Bonjour';
    } else if (lang === 'pt') {
        greeting = 'Olá';
    } else {
        greeting = 'Hola';
    }

        return (
            <div className="greetings-container">
                {greeting} {props.children}
            </div>
        );
    }

    export default Greetings;