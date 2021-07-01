import React from "react";
import Card from "./Card";

const Main = ({ items, loading }) => {
  return( 
    <div className="container">
      {items.map((item, index) => (
        <Card item={item} key={index} id={item.char_id} />
      ))}
    </div>
  );
};

export default Main;
