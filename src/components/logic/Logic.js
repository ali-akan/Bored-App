import classses from "./Logic.module.css";
import React, { useState, useEffect } from "react";

const Logic = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    const date = new Date();
    let dayOfWeek;
    switch (date.getDay()) {
      case 0:
        dayOfWeek = "Sunday";
        break;
      case 1:
        dayOfWeek = "Monday";
        break;
      case 2:
        dayOfWeek = "Tuesday";
        break;
      case 3:
        dayOfWeek = "Wednesday";
        break;
      case 4:
        dayOfWeek = "Thursday";
        break;
      case 5:
        dayOfWeek = "Friday";
        break;
      case 6:
        dayOfWeek = "Saturday";
        break;
      default:
        dayOfWeek = "";
    } 
    setDay(dayOfWeek);
  }, []);

  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");
  const [link, setLink] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [price, setPrice] = useState("");

  const getActivity = async () => {
    const api = "https://www.boredapi.com/api/activity/";

    try {
      const response = await fetch(api);
      const data = await response.json();
      setActivity("Activity: " + data.activity);
      setType(`Type: ` + data.type);
      setParticipants("participants: " + data.participants);
      setLink(data.link);
      setAccessibility("accessibility: " + data.accessibility);
      setPrice("price: " + data.price);
    } catch (err) {
      console.log(err);
      setActivity("Let's start coding");
    }
  };

  return (
    <main className={classses.main}>
      <div id="container">
        <h1 id="greeting">Happy {day}!</h1>
        <p>What should I do today?</p>
        <button className={classses.btn} id="generate" onClick={getActivity}>
          Tell me what to do
        </button>
        <div className={classses.activies}>
          <p id="activity">{activity}</p>
          <p id="type"> {type}</p>
          <p id="participants">{participants}</p>
          <p> {link}</p>
          <p>{accessibility}</p>
          <p>{price}</p>
        </div>
      </div>
    </main>
  );
};

export default Logic;
