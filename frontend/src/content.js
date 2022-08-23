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
  const setIsCompleted = props.setIsCompleted;
  const [treasureClicked, setTreasureClicked] = useState(false);

  const openTreasure = () => {
    if (stepsComplete) {
      setTreasureClicked(true);
      setIsCompleted(true);
    } else {
      alert("Wrong steps!");
    }
  }

  return (
    <div className="main-grid">
      <div className="grid-item"></div>
      <div className="grid-item">
        <div className="fruits">
          <label htmlFor="fruits">Choose a fruit:</label>
          <select id="fruits" value={fruits} name="fruits" onChange={(e) => {
            setFruits(e.target.value);
          }}>
            <option value="pineapple">Pineapple</option>
            <option value="blueberry">Blueberry</option>
            <option value="pomegranate">Pomegranate</option>
            <option value="fig">Fig</option>
          </select>
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
          <button onClick={() => {
            setCount(count + 1);
          }}>
            {count}
          </button>
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
        <form onChange={(e) => {
          setRadioValue(e.target.value);
        }}>
          <div className="radio-buttons">
            <input type="radio" name="radio-buttons" id="one" value="one" />
            <label htmlFor="one">One</label>
            <input type="radio" name="radio-buttons" id="two" value="two" />
            <label htmlFor="two">Two</label>
          </div>
        </form>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      {treasureClicked ? (
        <div className="grid-item"><OpenChest /></div>
      ) : (
        <div className="grid-item" onClick={openTreasure}><Chest /></div>
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