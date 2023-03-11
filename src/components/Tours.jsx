import React, { useState } from "react";

function Tours({ tours, removeTour }) {
  const [showText, setShowText] = useState(false);
  return (
    <div className="section-center">
      <div className="content">
        {tours.map((tour) => {
          const { id, name, image, info, price } = tour;
          return (
            <article className="each-article" key={id}>
              <img src={image} alt={name} />
              <div className="about">
                <div className="header">
                  <h4>{name}</h4>
                  <span className="price">{price}</span>
                </div>
                <p>
                  {showText ? info + ' ' : `${info.substring(0, 200)}...` + ' '}
                  <button
                    className="read-more"
                    onClick={() => setShowText(!showText)}>
                    {showText ? 'Show less' : 'Show More'}
                  </button>
                </p>
                <div className="button-div">
                  <button className="btn" onClick={() => removeTour(id)}>
                    Not interested
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Tours;

