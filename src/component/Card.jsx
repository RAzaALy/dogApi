import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="imgBx">
          <img src={item.image.url} alt="img" />
        </div>
        <div className="content">
          <div className="contentBox">
            <h3>{item.name}</h3>
            <h2>Temperament</h2>
            <p>{item.temperament}</p>
            <p>
              Life : {item.life_span} Height{" "} : {item.height.metric} Weight :{" "}
              {item.weight.metric}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
