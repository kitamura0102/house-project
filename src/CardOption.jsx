import React from "react";

export default function CardOption() {
  return (
    <section>
      <div className="options">
        <div className="cards-options">
          <div className="more-options">
          <img src="./src/assets/homepage-spot-agent-lg-1.webp" alt="" />
          <h3>Buy a home</h3>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button>Browse homes</button>
          </div>
          
          
        </div>
        <div className="cards-options">
          <div className="more-options">
          <img src="./src/assets/homepage-spot-sell-lg-1.webp" alt="" />
          <h3>Sell a home</h3>
          <p>
            No matter what path you take to sell your home, we can help you
            navigate a successful sale.
          </p>
          <button>See your options</button>
          </div>
          
        </div>
        <div className="cards-options">
          <div className="more-options">
          <img src="./src/assets/homepage-spot-rent-lg-1.webp" alt="" />
          <h3>Rent a home</h3>
          <p>
            We’re creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <button>Find rentals</button>
          </div>
        </div>
      </div>
    </section>
  );
}
