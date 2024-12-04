import "./Greetings.css";

function Greetings(props) {

    const { lang } = props;

    let greeting;

    switch (lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'pt':
            greeting = 'Olá';
            break;
        default:
            greeting = 'Hola';
            break;
    }

    // if (lang === 'de') {
    //     greeting = 'Hallo';
    // } else if (lang === 'fr') {
    //     greeting = 'Bonjour';
    // } else if (lang === 'pt') {
    //     greeting = 'Olá';
    // } else {
    //     greeting = 'Hola';
    // }

    return (
        <div className="greetings-container">
            {greeting} {props.children}
        </div>
    );
}

export default Greetings;