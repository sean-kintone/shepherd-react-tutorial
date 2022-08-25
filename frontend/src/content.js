import Chest from "./images/chest";
import OpenChest from "./images/openChest";

import React, { useState } from 'react'


function GridContent(props) {
  const count = props.count;
  const setCount = props.setCount;
  const fruits = props.fruits;
  const setFruits = props.setFruits;
  const stepsComplete = props.stepsComplete;
  const setRadioValue = props.setRadioValue;
  const uploadStatus = props.uploadStatus;
  const [treasureClicked, setTreasureClicked] = useState(false);

  const openTreasure = async () => {
    if (stepsComplete) {
      setTreasureClicked(true);
      uploadStatus();
    } else {
      alert("Wrong steps!");
      uploadStatus();
    }
  }

  return (
    <div className="main-grid">
      <div className="grid-item"></div>
      <div className="grid-item">
        <div className="fruits">
        </div>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">
        <div className="button-clicker">
        </div>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      {treasureClicked ? (
        <div className="grid-item"></div>
      ) : (
        <div className="grid-item"></div>
      )}
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>
  );
}

export default GridContent;