# Onboard like a PRO with Shepherd JS, React, and [Kintone Web Database](https://kintone.dev/en/)

## Outline <!-- omit in toc -->

* [Get Started](#get-started)
  * [Inside backend](#inside-backend)
  * [Inside frontend](#inside-frontend)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
* [Kintone API Token](#kintone-api-token)
* [Create a `.env` File](#create-a-env-file)
* [Edit content.js](#edit-contentjs)
  * [Add Some Fun HTML Elements](#add-some-fun-html-elements)
    * [Fruits](#fruits)
    * [Number Clicker](#number-clicker)
    * [Radio Button](#radio-button)
    * [Display a Treasure Chest](#display-a-treasure-chest)
* [Edit App.js](#edit-appjs)
  * [Build a Shepherd JS Tour](#build-a-shepherd-js-tour)
    * [Steps](#steps)
    * [Button Config](#button-config)
  * [Add a Treasure Chest Logic Check](#add-a-treasure-chest-logic-check)
* [Refactor](#refactor)
* [Check Your Work](#check-your-work)
* [What about the Backend?](#what-about-the-backend)
* [Still Got a Problem?](#still-got-a-problem)

---

## Get Started

First, clone the [sean-kintone/shepherd-react-tutorial](https://github.com/sean-kintone/shepherd-react-tutorial) repo!  🚀  
Then go inside the folder.

Once you are inside the folder, let's install the dependencies! Once for our backend, and again for our frontend!

```shell
git clone https://github.com/sean-kintone/shepherd-react-tutorial

cd shepherd-react-tutorial
```

### Inside backend

```shell
cd backend

npm install

npm start
```

### Inside frontend

```shell
cd ../frontend

npm install

npm start
```

---

## Create a Kintone Web Database App

Let's create a **ShepherdJS Onboarding** Kintone App!  
This will keep track of two metrics for visitors to our site:

1. Did users complete the task?
1. Did users finished our onboarding?

Here are the required fields & their configurations for our workshop:

| Field Type   | Field Name        | Field Code  | Note                                           |
| ------------ | ----------------- | ----------- | ---------------------------------------------- |
| Radio Button | Task Completed    | `completed` | Options: 'Yes' and 'No'                        |
| Number       | Percent Completed | `percent`   | This will show onboarding tour completion rate |

Be sure to click the **Save** and **Activate App** buttons! 💪

Your Kintone app should look like this, with one `Radio Button` field, and one `Number` field:

![Kintone App Overview](./images/1-1.png)

Your `Radio Button` settings should look like this (⚠️notice the field code is lower case, `completed`, and your button options are Upper Case `'Yes'` and `'No'`⚠️):
![Radio Button Settings](./images/1-2.png)

And your `Number` field settings should like as so:
![Number Field Settings](./images/1-3.png)

Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺

## Kintone API Token

To generate an API Token for a Kintone App:

1. Go to the Kintone App
2. Go to the Gear icon ⚙️ (top right corner) > Open the App Settings page
3. Click on the **App Settings** Tab > Click on **API Token** settings
4. Click the `Generate` button to generate a token
5. Click the `Save` button (top left corner) to save the token setting
6. Finally, click the `Update App` button (top right corner) to implement the token setting change.

Confused? 🤔 → Check out the [Get the API Token](https://youtu.be/pRtfn-8cf_I?t=117) video clip 📺  


## Create a `.env` File

Using the [.env.example](./../.env.example) file as a template, create a `.env` file. Then input your Kintone credentials like the following:

---

## Create a `.env` File

1. Using the [.env.example](.env.example) file as a template, create a `.env` file.
1. Then input your Kintone credentials like the following:

```txt
SUBDOMAIN = "example"
APPID = "1"
APITOKEN = "abcdefghijklmnopqrstuvwxyz"
```

### ⚠️ DO NOT DELETE THE [.env.example](./../.env.example) FILE!  <!-- omit in toc -->
[.env.example](./../.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

---

## Edit content.js

Today, we're just working on our frontend logic, so we've set up our backend express server, and API Post logic for you. You can check out our video on how we set up our backend [here](https://www.youtube.com/watch?v=LF2ue7ePgyU).

For this project, just know that we've set up our API POST Logic here in [/frontend/src/requests/postRecord.js](frontend/src/requests/postRecord.js), and we can import and call the PostRecord function in our code like so:

```js
import PostRecord from './requests/postRecord.js';
...
    PostRecord({
      completed: 'Yes',
      percent: 100
    });
...
```

Also, we have set up a few React Hooks, in order to keep track of variables and set their state across our app:

```jsx
const [count, setCount] = useState(0);
const [radioValue, setRadioValue] = useState("");
const [onboardingPercent, setOnboardingPercent] = useState(0);
const [fruits, setFruits] = useState("");
const [stepsComplete, setStepsComplete] = useState(false);
```

We will use the variables, `count`, `radioValue`, `fruits` etc, and set them across our app with their setter functions: `setCount`, `setRadioValue`, `setFruits`.

We have three goals for our coding today:

1. Add some fun HTML Elements to guide our users through
2. Create a ShepherdJS tour to onboard our users
3. Refactor our code to be a little bit neater.

### Add Some Fun HTML Elements

First, let's look at [content.js](../frontend/src/content.js).  
We have set up a 25 x 25 grid, using CSS grid.

```jsx
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
```

Let's add a selector in the fruits area, a clickable div, a radio button, and some treasure chests.

#### Fruits

In reality, this can be anything you want, we are just creating content to guide our users through later. I chose a simple HTML selector, with some options for fruits:

```jsx
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
```

As long as you bind the value of your selector to the `fruits` hook via `setFruits()`, anything is fine.

#### Number Clicker

Our Number Clicker is a clickable div, in which an `onClick` event listener fires, which adds +1 to our `count` variable. Notice we use the setter function `setCount()`:

```jsx
<div className="button-clicker">
  <button onClick={() => {
    setCount(count + 1);
  }}>
    {count}
  </button>
</div>
```

On our flat, invisible button, we display the current `count` variable using `{count}`. Due to React keeping track of the state of our variable, this changes in real time, as you click the div and add to the count. Cool!

#### Radio Button

Our radio buttons are part of a form, which updates the `radioValue` variable in real time.

```jsx
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
```

In the form's `onChange`, we set `radioValue` to whatever was clicked, via our `setRadioValue()` hook.

#### Display a Treasure Chest

Lastly, we need to display our treasure chests. If we have met the criteria in our app, we should be able to open the treasure chest `onClick`. Otherwise, we should display a closed treasure chest.

```jsx
{treasureClicked ? (
  <div className="grid-item"><OpenChest /></div>
) : (
  <div className="grid-item" onClick={openTreasure}><Chest /></div>
)}
```

Here we use a `ternary` operator, the `?` seen above. This is just a fancy way of writing an `if` statement in React, and is commonly used to conditionally display content. We could also re-write the above code like so:

```jsx
{if (treasureClicked) {
  <div className="grid-item"><OpenChest /></div>
} else {
  <div className="grid-item" onClick={openTreasure}><Chest /></div>
}}
```

## Edit App.js

Now that we have a fun app to play with, let's make a guided tour for our users in [/frontend/src/App.js](../frontend/src/App.js)

### Build a Shepherd JS Tour

We'll be referencing the [ShepherdJS documentation](https://shepherdjs.dev/docs/tutorial-02-usage.html), which tells us all we need to create steps for our workshop. Our steps need an ID, which HTML element we'll be attaching to, some buttons, a message, and finally a function which updates our tour progress, so we can keep track of it on our Kintone app!

From [./content.js](../frontend/src/content.js):

```jsx
<div className="radio-buttons">
```

Also, we specify to attach to the `right` of our element. You can specify `top`, `bottom`, `left`, and `right`.

#### Steps

Our app will have three steps in order to open our treasure box:

1. Selecting `option 2` from our radio buttons
2. Clicking our `number clicker` 7 times
3. Selecting 'fig' from our `fruits` selector.

You can change these conditions on your own to play around with the code. 💪

##### Step 1

```jsx
const steps = [
  {
    id: '1',
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
];
```

The `id` parameter is just for internal tracking. It can be used to return or skip to certain steps via code. We won't be using it directly today.

The `attachTo` parameter tells our tour where our dialog boxes attach to. The first step, is for our radio buttons, which have a `className` of `radio-buttons`.

From [./content.js](../frontend/src/content.js):

```jsx
<div className="radio-buttons">
```

Also, we specify to attach to the `right` of our element. You can specify `top`, `bottom`, `left`, and `right`.

#### Button Config

Our buttons for our tour get re-used, so we've 'refactored' them to a separate variable:

```jsx
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
```

Most importantly, we need to specify what our hints will display to guide our users through the app:

```jsx
title: 'Step 1!',
text: ['Click Option 2'],
```

Here we've chosen Option 2 to be correct, but you can change this and customize your "puzzle" as you see fit!

Lastly, in order to keep track of our users' onboarding experience, we'll be uploading the `onboard percent completion` stat to our Kintone Database. There are many ways to accomplish this, but ShepherdJS allows us to easily fire a custom function, whenever a step is displayed.

```jsx
beforeShowPromise: function () {
  return new Promise(function (resolve) {
    setOnboardingPercent(33);
    resolve();
  });
},
```

The `beforeShowPromise` parameter is an easy way to asynchronously run a function when a new step appears. Here, we are updating our `onboardingPercent` variable, via the `setOnboardingPercent` setter hook. Since our tour is three steps long, our first step will update it to 33%, our second, 66%, and the last step will update to 100%.

We've filled out the first step in our three step tour, try to fill out steps 2 and 3 on your own, and check against the completed code here:

```jsx
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
```

### Add a Treasure Chest Logic Check

Since we've created a fun puzzle for our users, and guided them through it with a ShepherdJS tour, it's time to make sure they can actually open the treasure chest.
In React, remember that we can use the `useEffect` hook, in order to run functions when certain conditions are met. In short, we want the treasure chest to *become openable* when the user meets our conditions.

```jsx
  useEffect(() => {
    //Logic for Opening Treasure
  }, []);
```

We start out with an empty useEffect. First, let's add in some logic for our puzzle. We want to check if each of the reactive variables (our fruits, number clicker, and radio button) meets our conditions:

```jsx
    if (fruits === 'fig' && count === 7 && radioValue === 'two') {
      //Conditions are met so open the treasure chest
    } else {
      // Display an error message?
    }
```

When fig, 7, and the option two have been selected, we can set our `stepsComplete` hook to `true` via our setter hook:

```jsx
useEffect(() => {
  if (fruits === 'fig' && count === 7 && radioValue === 'two') {
    setStepsComplete(true);
  } else {
    setStepsComplete(false);
  }
}, []);
```

Here comes the real magic of `useEffect` however. We can specify *when* we want this function to fire, by placing variables in the `dependency array` at the end of our hook. In our case, we want to re-check the treasure chest, whenever some of our conditions change, aka our `fruits`, `count`, or `radioValue`.

```jsx
useEffect(() => {
  if (fruits === 'fig' && count === 7 && radioValue === 'two') {
    setStepsComplete(true);
  } else {
    setStepsComplete(false);
  }
}, [count, fruits, radioValue]);
```

Now, whenever one of these variables changes, our `useEffect` hook will fire and check our treasure box logic for us. Very cool.

## Refactor

Refactoring is always a tricky subject -- How much is too much? When should I refactor? Is my refactoring making the code easier or harder to understand? These questions help developers make your team's life easier.

In principle, we will try to:
1. Separate our code into re-usable components
2. Keep our constants in a constants folder
3. Change hard-coded HTML etc into loops and smart-coded HTML, using the power of JSX.

## Check Your Work

Is your code not working?

Compare your [/frontend/src/App.js](../frontend/src/App.js), and [/frontend/src/content.js](../frontend/src/content.js) with the [completed versions folder](./finished_code/) to see if it is all written correctly.

## What about the Backend?

We are using the Express server setup as our backend. It is beyond the scope of this workshop but we went over it in our past React workshop:
* YouTube: [React & REST API: GET & POST to a Web Database - July Workshop - YouTube](https://www.youtube.com/watch?v=LF2ue7ePgyU)
* Codebase: [ahandsel/React_Workshop_by_Kintone](https://github.com/ahandsel/React_Workshop_by_Kintone)

## Still Got a Problem?

Check out README's [Debugging](../README.md#debugging---lets-fix-those-problems) section!

And finally, post your Kintone customization questions over at our community forum:  
[forum.kintone.dev](https://forum.kintone.dev/)

Good luck coding! 💪
