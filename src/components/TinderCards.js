import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([]); //Create a varibale in react
  //piece of code that runs based on condition
  useEffect(() => {
    //this is where the code runs...
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      //This is a cleanup... removes listeners
      unsubscribe();
    };
    //This will run once when the component loads, and never again until people changes
  }, []);
  return (
    <div>
      <div className="tinderCards-container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
