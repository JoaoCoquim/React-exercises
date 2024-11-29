import "./ListaDiogo.css";

function ListaDiogo(props) {

    const { children } = props.children;

    return (
        <div className="lista-diogo">
            Esta é a lista do Diogo que está {estado}.
            {children}
        </div>
    )
}

export default ListaDiogo;
