import React from "react";

export default function Header(props){
    return(
        <header>
            <div className="card">
                <img src={`./assets/${props.item.picture}`} alt="" width="60px"/>
                <p>{props.item.direccion}</p>
            </div>
        </header>
    )
}