# Onboard Users Like a Wizard 🧙 with Shepherd.JS -- React Basics Tutorials

![ShepherdJS Banner](./docs/img/ShepherdJS_Banner.png)

**Say goodbye to lost users!**  
Onboarding is a valuable feature for your App's first-time users. 💪

Our free, live workshop will walk you through creating a Web Database App, setting up a React project, and developing a tutorial guiding users through the App.

## Outline <!-- omit in toc -->
* [Get Started](#get-started)
* [📎 PREREQUISITES](#-prerequisites)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
* [Create a `.env` file](#create-a-env-file)
* [🤔 What is Shepherd.JS?](#-what-is-shepherdjs)
* [⚙️ What is Kintone?](#️-what-is-kintone)
* [Debugging - Let's Fix Those Problems 💪](#debugging---lets-fix-those-problems-)
  * [Errors related to .env](#errors-related-to-env)
  * [`npm install` command is not working](#npm-install-command-is-not-working)
  * ["npm run upload" failed?](#npm-run-upload-failed)
  * [Uncaught Error: Target container is not a DOM element](#uncaught-error-target-container-is-not-a-dom-element)

---

## Get Started

First, let's clone the [sean-kintone/shepherd-react-tutorial](https://github.com/sean-kintone/shepherd-react-tutorial) repo!  🚀  
Then go inside the folder.

Once you are inside the folder, let's install the dependencies!

```shell
cd Downloads

git clone https://github.com/sean-kintone/shepherd-react-tutorial

cd shepherd-react-tutorial

npm install

npm install -g @kintone/customize-uploader
```

## Get Your Free Kintone Database

[bit.ly/KDP_NEW](http://bit.ly/KDP_NEW)
* ⚡ Only use lowercase, numbers, & hyphens in your subdomain
* ⚠ Do not use uppercase or special characters

|                                             |                                             |
| ------------------------------------------- | ------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign up form](./docs/img/SignUp-1.png) | ![Step 2: Email address will be the login name & the subdomain will be your unique link](./docs/img/SignUp-2.png) |

---

## Create a `.env` file

Using the [.env.example](.env.example) file as a temple, create a `.env` file that will contain your login credentials and the Kintone App's View ID.

Here is what your `.env` might look like:

```txt
SUBDOMAIN = ""
APPID = ""
APITOKEN = ""
```

### ⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  <!-- omit in toc -->
[.env.example](.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

---

## 🤔 What is Shepherd.JS?

Shepherd is a free, open-source JavaScript library for guiding users through your App.

Shepherd.JS is similar to other popular onboarding JS libraries such as Intro.JS and React Joyride but:
* Unlike Intro.JS, Shepherd.JS is free for personal and commercial uses.
* Unlike React Joyride, Shepherd.JS is not limited to React projects.

## ⚙️ What is Kintone?

Kintone is a no-code/low-code cloud platform for teams to quickly & easily share and collaborate on their data.

You can add JavaScript, CSS, &/or HTML to enhance the front-end UI/UX of a Kintone App. This can include features such as maps, buttons, and color-coding.

Read up on how to customize and develop on the Kintone platform at [kintone.dev](https://kintone.dev/)

---

## Debugging - Let's Fix Those Problems 💪

Here is a rundown of common problems that may occur & their solutions!

### Errors related to .env

If you get one of the following error messages, then please verify your `.env` file has been correctly configured, and you have not modified the `.env.example`.

* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `[webpack-cli] Error: Missing environment variable: KINTONE_BASE_URL`
* `[webpack-cli] Error: Missing environment variable: KINTONE_USERNAME`
* `[webpack-cli] Error: Missing environment variable: KINTONE_PASSWORD`
* `[webpack-cli] Error: Missing environment variable: VIEW_ID`

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `shepherd-react-tutorial` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `shepherd-react-tutorial` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

### "npm run upload" failed?
_@kintone/customize-uploader not working?_ Let's try the following:

(1) Verify that customize uploader was installed globally
* `npm install -g @kintone/customize-uploader`

(2) Verify that the .env login info is correct (including the password)
* ⚠️ Make sure your login info is inside `.env` file & **NOT** `.env.example` file!
* ⚠️ Verify that KINTONE_BASE_URL input is correctly formatted:
  * ✅ Correct Format: `https://example.kintone.com`
  * ❌ Incorrect Format: `https://example.kintone.com/` or `example.kintone.com`
* ⚠️ Re-run the npm commands after saving the .env file
* ⚙️ Details: [Create a `.env` file](#create-a-env-file)

(3) Verify your customize-manifest.json was updated with the correct App ID
* ⚙️ Details: [Input the App ID](#input-the-app-id)

### Uncaught Error: Target container is not a DOM element
Verify that the Custom View (Gallery View) has the following HTML Code:

```HTML
<div id="root"></div>
```
