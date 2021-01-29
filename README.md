# IBM Call for code spot challenge - Climate change

Did you know that there 409 natural disasters occurred across the world last year?
Every year natural disasters kill around 90,000 people and affect close to 160 million people worldwide.

## Dev team

University of the Highlands and Islands T2

- Lewis Brogan
- Jason Hewitt
- Grant Johnstone
- Calum MacIntosh

## Contents 

1. [Overview](#overview)
2. [The idea | How it works](#the-idea)
4. [Diagrams](#diagrams)
5. [Documents](#documents)
6. [Technology](#technology)
7. [Getting started](#getting-started)
8. [Resources](#resources)
9. [License](#license)

## Overview

### What's the problem?
Climate change.


## The idea | How it works

We can't tell you when disaster will strike, but we can help you prepare.
With our app, we enable communities to pool their resources in times of emergency, so that they can help find and provide aid to the people who need it most.

Did you know that there were 409 natural disasters across the world last year?
Every year natural disasters kill around 90 000 people and affect close to 160 million people                      
worldwide.

We cannot tell you when every disaster will strike but we can help you prepare as much as you can.
Every second counts in an emergency so we simplified our app down to the essentials meaning less 
time trying to organise and more time helping those who need you.

With our app we allow communities to pool resources and find and provide aid to the people who    
need it most. Food, water, and shelter are among the most essential things for everyone in times of 
disaster. We provide people the ability to donate supplies, help or a roof over someones head if 
they have it, to anyone in their area who is in desperate need in just a few minutes. 
We made it our priority to ensure that its just as easy to request aid because we know if you are 
asking for it then you have already been through too much.

We have user interface designed to be usable by anyone in any situation. Even with a severe injury 
we hope that we can provide a tool that might save your life. With just the press of a button you can 
request someone to assist you or offer your assistance to someone else and if you are trapped ping 
your location to emergency services or other volunteers who are waiting nearby. We do this by using 
the here API to access map and location data. This allows us to guide rescuers to the places they are 
needed most.

If you are still unable to use our UI then we have a Watson chat bot who has been programmed to 
give responses to just about any question or request you have so it can still be used easily and 
quickly and help to calm the situation you are facing.

We also have a community planning system so people who live in areas where natural disasters may 
occur can come together and plan for any situation together so that when disaster strikes people 
know what plan to follow. This will have a rally point system that is regularly maintained and 
updated so people have a general idea where to go beforehand.

If we cannot prevent natural disasters from occurring then we want everyone to know they have a 
way to get through it. The suffering caused by an event like this can be unimaginable but with our 
community app that has been built around you, you will  always have friends and people who will do 
whatever it takes to help, all they ask is you do the same.


## Diagrams
![App Screen 1](/images/Screenshot_1605207243.png)
![App Screen 2](/images/app-screen-2)
![Diagram](/images/architecture-diagram.png)


## Documents
[Powerpoint Presentation](https://uhi.atlassian.net/secure/RapidBoard.jspa?rapidView=43&projectKey=S4CT2&modal=detail&selectedIssue=S4CT2-38)


## Technology

### IBM Cloud Services

- [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/)
- [Disaster Resiliency](https://developer.ibm.com/callforcode/get-started/climate-change/disaster-resiliency/)
- [IBM Cloud](https://cloud.ibm.com/)

### HERE Technologies

- [HERE.com API Key](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic)
- [HERE Maps](https://developer.here.com/products/maps)
- [HERE Routing](https://developer.here.com/products/routing)
- [Integrate interactive maps and location features into your application](https://developer.here.com/documentation/)

## Getting started

### Prerequisites

- Register for an [IBM Cloud](https://www.ibm.com/account/reg/us-en/signup?formid=urx-42793&eventid=cfc-2020?cm_mmc=OSocial_Blog-_-Audience+Developer_Developer+Conversation-_-WW_WW-_-cfc-2020-ghub-starterkit-cooperation_ov75914&cm_mmca1=000039JL&cm_mmca2=10008917) account.
- Install and configure [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
- Register for a [HERE](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic) account.
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html). See the [React Native documentation](https://reactnative.dev/docs/environment-setup) for the exact steps and requirements based on your Operating System and Target OS. For example:
    - **iOS on macOS**
        - [Node.js](https://nodejs.org/en/)
        - [Watchman](https://facebook.github.io/watchman/docs/install)
        - [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
        - [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
    - **Android on Windows**
        - [Node.js](https://nodejs.org/en/)
        - [Python 2](https://www.python.org/downloads/)
        - [Java Development Kit](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
        - [Android Studio](https://developer.android.com/studio/index.html) - add Android 9 (Pie) SDK & configure `ANDROID_HOME`
        - [Create an Android Virtual Device (AVD)](https://developer.android.com/studio/run/managing-avds.html) - with Pie image (API Level 28)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Cooperation-2020).

### Steps

1. [Set up an instance of Watson Assistant](#1-set-up-an-instance-of-watson-assistant).
1. [Provision a CouchDB instance using Cloudant](#2-Provision-a-CouchDB-instance-using-Cloudant).
1. [Generate an API Key from the HERE Developer Portal](#3-generate-an-api-key-from-the-here-developer-portal).
1. [Run the server](#4-run-the-server).
1. [Run the mobile application](#5-run-the-mobile-application).

### 1. Set up an instance of Watson Assistant

Log in to IBM Cloud and provision a Watson Assistant instance.

1. Provision an instance of **Watson Assistant** from the [IBM Cloud catalog](https://cloud.ibm.com/catalog/services/watson-assistant).
1. Launch the Watson Assistant service.
1. [Create an **Assistant**](https://cloud.ibm.com/docs/assistant?topic=assistant-assistant-add).
1. [Add a dialog skill](https://cloud.ibm.com/docs/assistant?topic=assistant-skill-dialog-add) to the **Assistant** by importing the [`starter-kit-cooperation-dialog-skill.json`](./starter-kit/assistant/starter-kit-cooperation-dialog-skill.json) file.
1. Go back to All Assistants page, open **Settings** from the action menu ( **`⋮`** ) and click on **API Details**.
1. Note the **Assistant ID**, **API Key**, and **Assistant URL**. For **Assistant URL**, make note of the base URL/domain (e.g., `https://api.us-south.assistant.watson.cloud.ibm.com` or `https://api.eu-gb.assistant.watson.cloud.ibm.com`) and not the full directory/path. You will need all three of these values in Step 4 below.

1. Go to **Preview Link** to get a link to test and verify the dialog skill.

### 2: Provision a CouchDB instance using Cloudant

Log into the IBM Cloud and provision a [CouchDB instance using Cloudant](https://www.ibm.com/cloud/cloudant).

1. From the catalog, select Databases and then the Cloudant panel.
1. Once selected, you can choose your Cloudant plan -- there is a free tier for simple testing that is sufficient to run this CIR example. You should choose an appropriate region, give the service a name, and it is recommended you choose **Use only IAM** under **Available authentication methods**. You can leave the other settings with their defaults. Click the blue **Create** button when ready.
1. Once your Cloudant instance has been created, you need to create a service credential that the CIR API Server can use to communicate with it. By selecting your running Cloudant instance, you can choose **Service credentials** from the left-hand menu. Create a new service credential and give it a name (it doesn't matter what you call it).
1. Once created, you can display the credentials by selecting **view service credentials**, and then copy the credential, so you are ready to paste it into the code of the API server in Step 4.

### 3. Generate an API Key from the HERE Developer Portal

The application uses HERE Location Services for maps, searching, and routing.

To access these services, you'll need an API key. Follow the instructions outlined in the [HERE Developer Portal](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic) to [generate a JavaScript API key](https://developer.here.com/documentation/authentication/dev_guide/topics/api-key-credentials.html).

### 4. Run the server

To set up and launch the server application:

1. Go to the `starter-kit/server-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/server-app` directory, and create a new file named `.env`.
1. Edit the newly created `.env` file and update the `ASSISTANT_URL`, `ASSISTANT_ID`, and `ASSISTANT_IAM_APIKEY` with the values from the dialog skill's API Detail page in Watson Assistant, from Step 1. Also, update the `CLOUDANT_ID` and `CLOUDANT_IAM_APIKEY` with the values from the service credential you created in Step 2. (Note that the `username` from the credential is what should be used for the `CLOUDANT_ID`.)
1. Edit the **name** value in the `manifest.yml` file to your application name (for example, _my-app-name_).
1. From a terminal:
    1. Go to the `starter-kit/server-app` directory of the cloned repo.
    1. Install the dependencies: `npm install`.
    1. Launch the server application locally or deploy to IBM Cloud:
        - To run locally:
            1. Start the application: `npm start`.
            1. The server can be accessed at <http://localhost:3000>.
        - To deploy to IBM Cloud:
            1. Log in to your IBM Cloud account using the IBM Cloud CLI: `ibmcloud login`.
            1. Target a Cloud Foundry org and space: `ibmcloud target --cf`.
            1. Push the app to IBM Cloud: `ibmcloud app push`.
            1. The server can be accessed at a URL using the **name** given in the `manifest.yml` file (for example,  <https://my-app-name.bluemix.net>).

### 5. Run the mobile application

To run the mobile application (using the Xcode iOS Simulator or Android Studio Emulator):

1. Go to the `starter-kit/mobile-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/mobile-app` directory, and create a file named `.env`.
1. Edit the newly created `.env` file:
    - Update the `STARTER_KIT_SERVER_URL` with the URL to the server app launched in the previous step.
        > **Note**: If you are running the server locally and testing with the Android Emulator set the `STARTER_KIT_SERVER_URL` using the local machine's URL (e.g., `http://10.0.2.2:3000`) instead of `localhost`
    - Update the `HERE_APIKEY` with the API key generated in the HERE Developer Portal.
1. From a terminal:
    1. Go to the `starter-kit/mobile-app` directory.
    1. Install the dependencies: `npm install`.
    1. **iOS only**: Go to the `ios` directory: `cd ios`.
    1. **iOS only**: Install pod dependencies: `pod install`.
    1. **iOS only**: Return to the `mobile-app` directory: `cd ../`.
    1. Launch the app in the simulator/emulator:
        - **iOS only**: `npm run ios`
            > **Note**: You should be running at least iOS 13.0. The first time you launch the simulator, you should ensure that you set a Location in the Features menu.
        - **Android only**: `npm run android`
            > **Note**: Your Android Studio needs to have the `Android 9 (Pie)` SDK and a `Pie API Level 28` virtual device 
        - **Alternative way to run on Android**: `react-native run-android` 
            1. **Android only**: Open Android Studio and setup the project with the android folder. 
            1. **Android only**: Open Android Virtual Device Manager and launch the virtual device installed.
            1. **Android only**: Click on Debug in Android Studio.

With the application running in the simulator/emulator, you should be able to navigate through the various screens:

![Intro Screen](/images/0-screen-home.png)
![Donate Screen](/images/1-screen-donate.png)
![Search Screen](/images/2-screen-search.png)
![Chat Screen](/images/5-screen-chat.png)
![Map1 Screen](/images/3-screen-map.png)
![Map2 Screen](/images/4-screen-map.png)

## Resources

- [IBM Cloud](https://www.ibm.com/cloud)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
- [IBM Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=cloudant-overview)
- [HERE Location Services](https://developer.here.com/documentation)
- [Node.js](https://nodejs.org)
- [React Native](https://reactnative.dev/)
- [IBM Blockchain for Developers](https://developer.ibm.com/technologies/blockchain/)

## License

This solution starter is made available under the [Apache 2 License](LICENSE).
