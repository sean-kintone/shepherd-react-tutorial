import React, { useContext, useState, useEffect } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import GridContent from './content.js'
import Chest from './images/chest';
import OpenChest from './images/openChest';
import PostRecord from './requests/postRecord.js';
import "shepherd.js/dist/css/shepherd.css";

function App() {

  const [count, setCount] = useState(0);
  const [radioValue, setRadioValue] = useState("");
  const [onboardingPercent, setOnboardingPercent] = useState(0);
  const [fruits, setFruits] = useState("");
  const [stepsComplete, setStepsComplete] = useState(false);

  //TODO
  useEffect(() => {
    //Logic for Opening Treasure
  }, []);

  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    useModalOverlay: true
  };

  //TODO
  const buttonConfig = [
    // Objects for our Tour 'Next' and 'Previous' buttons
  ]

  //TODO
  const steps = [
    // Our Tour Logic. We need to specify:
    // id
    // where to attach To
    // our buttons
    // Do we highlight?
    // Do we scrollTo?
    // Is there a cancelIcon?
    // Our step title
    // Our Step text
    // see here: https://shepherdjs.dev/docs/tutorial-02-usage.html
  ];

  function Button() {
    const tour = useContext(ShepherdTourContext);

    return (
      <button className="button dark" onClick={tour.start}>
        Start Tour
      </button>
    );
  }

  const uploadStatus = async () => {
    let onboardingStatus = {
      'completed': stepsComplete ? "Yes" : "No",
      'percent': onboardingPercent
    }
    PostRecord(onboardingStatus);
  };

  return (
    <div>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <div className='header'>
          <Button />
        </div>
        <GridContent
          count={count}
          setCount={setCount}
          fruits={fruits}
          setFruits={setFruits}
          setRadioValue={setRadioValue}
          chest={Chest}
          openChest={OpenChest}
          stepsComplete={stepsComplete}
          uploadStatus={uploadStatus}
        />
      </ShepherdTour>
    </div>
  );
}

export default App;