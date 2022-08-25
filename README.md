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

---

## Get Started

First, let's clone the [sean-kintone/shepherd-react-tutorial](https://github.com/sean-kintone/shepherd-react-tutorial) repo and go inside the folder.

Once you are inside the folder, let's install the dependencies!

```shell
cd Downloads

git clone https://github.com/sean-kintone/shepherd-react-tutorial

cd shepherd-react-tutorial

npm install

npm install -g @kintone/customize-uploader
```

## 📎 PREREQUISITES

### 🚀 Getting your FREE Kintone Database

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
