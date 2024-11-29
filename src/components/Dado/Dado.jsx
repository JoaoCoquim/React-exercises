import "./Dado.css";
import PropTypes from 'prop-types'

function Dado() {

    let random = Math.floor(Math.random() * 6) + 1;

    // Object destructuring
    //const { numero } = props;
    //let resultado;

    // Renderização Condicional
    /*if (numero > 3 ){
        resultado = 'Yeaaah! 😊'
    } else {
        resultado = 'Auch! 😢'
    }*/

    let dadoClass = '';

    if (random >= 5) {
        dadoClass = 'good'
    } else {
        dadoClass = 'bad'
    }

    return (
        <div className={`dado ` + dadoClass}>

            {/* {numero >= 5 && "😊"}
            {numero < 5 && "😢"} */}

            {random >= 5 ? "😊" : "😢"}
            { random }

            {/* {resultado} */}
        </div>
    )

}

export default Dado;
