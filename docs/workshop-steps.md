# Onboard like a PRO with Shepherd JS, React, and [Kintone Web Database](https://kintone.dev/en/)

## Outline <!-- omit in toc --> <!-- markdownlint-disable MD007 -->

- [Onboard like a PRO with Shepherd JS, React, and Kintone Web Database](#onboard-like-a-pro-with-shepherd-js-react-and-kintone-web-database)
  - [Get Started](#get-started)
  - [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
  - [Create a `.env` file](#create-a-env-file)
  - [Edit content.js](#edit-contentjs)
    - [Add some fun HTML Elements](#add-some-fun-html-elements)
      - [Fruits](#fruits)
      - [Number Clicker](#number-clicker)
      - [Radio Button](#radio-button)
  - [Edit App.js](#edit-appjs)
    - [Build a Shepherd JS Tour](#build-a-shepherd-js-tour)
      - [Steps](#steps)
      - [Button Config](#button-config)
  - [Refactor](#refactor)
  - [Check Your Work](#check-your-work)
<!-- markdownlint-enable MD007 -->


## Get Started

First, let's download the [sean-kintone/shepherd-react-tutorial](https://github.com/sean-kintone/shepherd-react-tutorial) Repo and go inside the folder.

Once you are inside the folder, let's install the dependencies! Once for our backend, and again for our frontend!

```shell
git clone https://github.com/sean-kintone/shepherd-react-tutorial

cd shepherd-react-tutorial

cd backend

npm install

npm start
```

Make a new tab in your console and:

```shell
cd ../frontend

npm install

npm start
```

## Create a Kintone Web Database App

Let's create a **ShepherdJS Onboarding** Kintone App!  
This will keep track of two metrics for visitors to our site:

1) Did Users complete the task?
2) Did Users finished our onboarding?

![images/kintone-app-setup.gif](images/kintone-app-setup.gif)

Here are the required fields & their configurations for our workshop:

| Field Type   | Field Name           | Field Code  | Note                                           |
| ------------ | -------------------- | ----------- | ---------------------------------------------- |
| Radio Button | Task Completed | `completed` | Options: 'Yes' and 'No'                        |
| Number       | Percent Completed    | `percent`   | This will show onboarding tour completion rate |

Be sure to click the **Save** and **Activate App** buttons! 💪

Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺

## Create a `.env` file

Using the [.env.example](./../.env.example) file as a template, create a `.env` file that will contain your login credentials and API Token.

Here is what your `.env` might look like:

```txt
SUBDOMAIN = "example"
APPID = "1"
APITOKEN = "fj3iaoJ1IFJ#*@(328jf3m3lwf"
```

⚠️ DO NOT DELETE THE [.env.example](./../.env.example) FILE!  
[.env.example](./../.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

## Edit content.js

Today, we're just working on our frontend logic, so we've set up our backend express server, and API Post logic for you. You can check out our video on how we set up our backend [here](https://www.youtube.com/watch?v=LF2ue7ePgyU).

For this project, just know that we've set up our API POST Logic here in [/frontend/src/requests/postRecord.js](frontend/src/requests/postRecord.js), and we've can import and call the PostRecord function in our code like so:

```js
import PostRecord from './requests/postRecord.js';
...
    PostRecord({
      completed: 'Yes',
      percent: 100
    });
...
```

We have three goals for our coding:

1. Add some fun HTML Elements to guide our users through

2. Create a ShepherdJS tour to onboard our users

3. Refactor our code to be a little bit neater.

### Add some fun HTML Elements

First, let's look at our post body.

![images/1-1.png](images/1-1.png)

```js
const body: PostBody = {
  title: null, // Article's title (from our Kintone record)
  contentFormat: null, // 'markdown' or 'html' (writing format)
  content: null, // Article's body (from our Kintone record)
  tags: null, // String "tags" for our article. Optional!
  publishStatus: null, // The status of our article: 'public', 'draft', or 'unlisted'
  notifyFollowers: null // Sends a notification after publishing.
}
```

For reference, the [Medium.com API docs](https://github.com/Medium/medium-api-docs#33-posts) on POST Requests are pretty simple!

#### Fruits

Our post title needs to come from our Kintone App.  
Remember that we set our `Title` field to have a lower-case `title` field code in our Kintone App.

![images/1-2.png](images/1-2.png)

We can access the information on the show page easily in our code:

```js
const body: PostBody = {
  title: events.record.title.value, // Article's title (from our Kintone record)
  contentFormat: null, // 'markdown' or 'html' (writing format)
  content: null, // Article's body (from our Kintone record)
  tags: null, // String "tags" for our article. Optional!
  publishStatus: null, // The status of our article: 'public', 'draft', or 'unlisted'
  notifyFollowers: null // Sends a notification after publishing.
}
```

Next, according to the documentation, Medium articles can be submitted in either Markdown or HTML formats! Pretty cool.  
Let's go with `markdown` this time:

```js
const body: PostBody = {
  title: events.record.title.value, // Article's title (from our Kintone record)
  contentFormat: 'markdown', // 'markdown' or 'html' (writing format)
  content: null, // Article's body (from our Kintone record)
  tags: null, // String "tags" for our article. Optional!
  publishStatus: null, // The status of our article: 'public', 'draft', or 'unlisted'
  notifyFollowers: null // Sends a notification after publishing.
}
```

The `content` parameter should be our `Body` field from our app, which we designated with the `body` field code:

![images/2.png](images/2.png)

Just like above, fill it in with the record variable:

```js
const body: PostBody = {
  title: events.record.title.value, // Article's title (from our Kintone record)
  contentFormat: 'markdown', // 'markdown' or 'html' (writing format)
  content: events.record.title.value, // Article's body (from our Kintone record)
  tags: null, // String "tags" for our article. Optional!
  publishStatus: null, // The status of our article: 'public', 'draft', or 'unlisted'
  notifyFollowers: null // Sends a notification after publishing.
}
```

Continue to fill in the body parameters.  

#### Number Clicker

`tags` are up to you, depending on the contents of your article. The POST API accepts an `array` of `strings`. Here is an example:

```js
tags: ['kintone', 'markdown', 'medium', 'low-code'],
```

#### Radio Button

`publishStatus` is the status of your article. We will be publishing immediately, but saving to your medium.com account's `drafts` is also possible!

`notifyFollowers` will do exactly that and takes a boolean, `true` or `false`. We're testing, so let's set it as `false` for now.

Our finished post body should look similar to this:

```js
const body: PostBody = {
  title: event.record.title.value, // Article's title (from our Kintone record)
  contentFormat: "markdown", // 'markdown' or 'html' (writing format)
  content: event.record.body.value, // Article's body (from our Kintone record)
  tags: ['kintone', 'markdown', 'medium', 'low-code'], // String "tags" for our article. Optional!
  publishStatus: 'public', // The status of our article: 'public', 'draft', or 'unlisted'
  notifyFollowers: false // Sends a notification after publishing.
    }
```

And done! This should be good data to pass to our API call...  
but we will need a button for our users to click to start the process.



## Edit App.js

Save your work and run kintone-customize-uploader by entering `npm run start` in your terminal!  
Navigate to your app, create a record, write some Markdown, and click the publish button!

See the [slides.pdf](../slides.pdf) for more info!

### Build a Shepherd JS Tour

#### Steps

#### Button Config

## Refactor

## Check Your Work

Is your code not working?

Compare your [./src/main.ts](../src/main.ts) with the [completed-code.md](./completed-code.md) to see if it is all written correctly.

Still got a problem?

Check out README's [Debugging](../README.md#debugging---lets-fix-those-problems) section!

And finally, post your Kintone customization questions over at our community forum:  
[forum.kintone.dev](https://forum.kintone.dev/)

Good luck coding! 💪
