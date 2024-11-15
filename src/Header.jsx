import React from "react";

export default function Header(props) {

    
  return (
    <div className="card">
      
      <img src={`../src/assets/${props.item.picture}`} alt="" className="picture" />
      <p className="price">
        <strong>${props.item.precio.toLocaleString("en-EN")}.00</strong>
      </p>
      <div className="regular-info">
        <span>
          <strong>{props.item.camas}</strong> beds |
        </span>
        <span>
          {" "}
          <strong>{props.item.baños}</strong> bath |
        </span>
        <span>
          {" "}
          <strong>{props.item.area}</strong> sqft
        </span>
      </div>
      <p className="address"> {props.item.direccion}</p>
      <p className="type-of-property"> {props.item.tipo}</p>
    </div>
  );
}
