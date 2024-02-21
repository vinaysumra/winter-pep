import React from "react";
import "./styles/Home.css";

function Home({ arr }) {
  console.log(arr);
  return (
    <div className="main">
      <div className="details">
        {arr.map((items) => {
          return (
            <div className="card">
              <div className="username">
                <div className="left">Name:</div>
                <div className="right">{items[0]}</div>
              </div>
              <div className="age">
                <div className="left">age:</div>
                <div className="right">{items[1]}</div>
              </div>
              <div className="address">
                <div className="left">address:</div>
                <div className="right">{items[2]}</div>
              </div>
              <div className="email">
                <div className="left">email:</div>
                <div className="right">{items[3]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
