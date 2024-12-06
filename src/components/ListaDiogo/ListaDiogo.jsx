import React from "react";
import "./ListaDiogo.css";

function ListaDiogo(props) {

    const { children, estado } = props;

    return (
        <div className="lista-diogo">
            Esta é a lista do Diogo que está {estado}.
            {children}
        </div>
    )
}

export default ListaDiogo;
