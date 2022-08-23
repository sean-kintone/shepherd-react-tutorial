import React, { useContext, useState, useEffect } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import GridContent from './content.js'
import Chest from './images/chest';
import OpenChest from './images/openChest';
import PostRecord from './requests/postRecord.js';
import "shepherd.js/dist/css/shepherd.css";

function App() {

  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [radioValue, setRadioValue] = useState("");
  const [onboardingPercent, setOnboardingPercent] = useState(0);
  const [fruits, setFruits] = useState("");
  const [isCompleted, setIsCompleted] = useState("No");
  const [stepsComplete, setStepsComplete] = useState(false);

  useEffect(() => {
    if (fruits === 'fig' && count === 7 && radioValue === 'two') {
      setStepsComplete(true);
    } else {
      setStepsComplete(false);
    }
  }, [count, fruits, radioValue]);

  const Timer = () => {
    function toggle() {
      setIsActive(!isActive);
    }

    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, []);


    return (
      <div className="timer">
        {seconds}s
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    );
  };

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
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(33);
          resolve();
        });
      },
      attachTo: { element: '.radio-buttons', on: 'right' },
      buttons: buttonConfig,
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 1!',
      text: ['Click Option 2'],
    },
    {
      id: '2',
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(66);
          resolve();
        });
      },
      attachTo: { element: '.button-clicker', on: 'right' },
      buttons: buttonConfig,
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 2!',
      text: ['Click Here 7 Times'],
    },
    {
      id: '3',
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setOnboardingPercent(100);
          resolve();
        });
      },
      attachTo: { element: '.fruits', on: 'right' },
      buttons: buttonConfig,
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 3!',
      text: ['Pick Fig'],
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

  const uploadStatus = () => {
    console.log('button clicked');
    let onboardingStatus = {
      'completed': isCompleted,
      'percent': onboardingPercent
    }
    PostRecord(onboardingStatus);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(true);
    setCount(0);
    setFruits("");
    setOnboardingPercent(0);
    setIsCompleted(false);
  }

  return (
    <div>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <div className='header'>
          <Button />
          <Timer />
          <button onClick={uploadStatus}>hi</button>
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
        />
      </ShepherdTour>
    </div>
  );
}

export default App;