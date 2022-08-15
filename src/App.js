import React, { useContext, useState, useEffect } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import GridContent from './content.js'
import postKintone from './post_kintone.js';
import "shepherd.js/dist/css/shepherd.css";

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
    classes: 'shepherd-button-secondary',
    text: 'Exit',
    type: 'cancel'
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Back',
    type: 'back'
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Next',
    type: 'next'
  }
]

const steps = [
  {
    id: 'intro',
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

function App() {

  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [fruits, setFruits] = useState("");


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

  const UploadScore = () => {
    const upload = () => {
      console.log('button clicked');
      postKintone(seconds);
    }
    return (
      <button className="button" onClick={upload}>
        Upload Score
      </button>
    );
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(true);
    setCount(0);
    setFruits("");
  }

  return (
    <div>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <div className='header'>
          <Button />
          <Timer />
          <UploadScore />
        </div>
        <GridContent
          count={count}
          setCount={setCount}
          fruits={fruits}
          setFruits={setFruits} />
      </ShepherdTour>
    </div>
  );
}

export default App;