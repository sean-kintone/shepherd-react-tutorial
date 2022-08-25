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

  useEffect(() => {
    if (fruits === 'fig' && count === 7 && radioValue === 'two') {
      setStepsComplete(true);
    } else {
      setStepsComplete(false);
    }
  }, [count, fruits, radioValue]);

  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    useModalOverlay: true
  };

  const buttonConfig = [
    {
      classes: 'shepherd-button-primary',
      text: 'Back',
      type: 'back',
    },
    {
      classes: 'shepherd-button-primary',
      text: 'Next',
      type: 'next',
    }
  ]

  const steps = [
    {
      id: 'intro',
      attachTo: { element: '.radio-buttons', on: 'right' },
      buttons: buttonConfig,
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 1!',
      text: ['Click Option 2'],
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(33);
          resolve();
        });
      },
    },
    {
      id: '2',
      attachTo: { element: '.button-clicker', on: 'right' },
      buttons: buttonConfig,
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 2!',
      text: ['Click Here 7 Times'],
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(66);
          resolve();
        });
      },
    },
    {
      id: '3',
      attachTo: { element: '.fruits', on: 'right' },
      buttons: buttonConfig,
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 3!',
      text: ['Pick Fig'],
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(100);
          resolve();
        });
      },
    },
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