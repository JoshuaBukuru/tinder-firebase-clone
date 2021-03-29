import React, { useState, useEffect } from "react";
import "./Chats.css";
import Chat from "./Chat";
import db from "../firebase";
const Chats = () => {
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
    <div className="chats">
      {people.map((person) => (
        <Chat
          key={person.name}
          name={person.name}
          message={person.message}
          timestamp={person.timestamp}
          profilePic={person.url}
        />
      ))}
    </div>
  );
};

export default Chats;
