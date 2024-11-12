import { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./App.css";
import "./card.css";
import React from "react";
import Search from "./Search.jsx";
import Header from "./Header.jsx";
import { propiedades } from "./assets/propiedades.js";

function App() {
  const cards = propiedades.map((item) => {
    return <Header item={item} />;
  });
  const header = (
    <header>
      <div className="info">
        <div className="info-text">
        <h2>Homes For You</h2>
        <p>Based on homes you recently viewed</p>
        </div>
        <div className="info-btn">
        <button onclick="desplazarIzquierda()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
        </button>
        <button onclick="desplazarDerecha()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>
        </button>
        </div>
        
      </div>
      <div className="cards">{cards}</div>
      <a href="#" className="recommended-homes">
        More recommended homes
      </a>
    </header>
  );

  return (
    <>
      <div>
        <Navbar />
        <Search />
        {header}
      </div>
    </>
  );
}

export default App;
