# React Native - Assessment Shan

## 27th May - 2023
`
      !
      !
      ^ 
     / \ 
    /___\
    |= =| 
    |   |
    |   | 
    | S | 
    | H | 
    | A | 
    | N | 
    |   | 
    |   |  
    |   |
  /|##!##|\
 / |##!##| \
/  |##!##|  \
| / ^ | ^ \ |
| / ( | ) \ |
|/  ( | ) \| 
    (( )) 
   (( : )) 
   (( : )) 
    (( )) 
     ( ) 
      . 
      . 
      .
`

#### [prashasoft@gmail.com](mailto:prashasoft@gmail.com)

#### +94 77 977 3225

It provides a clear and organized structure, core dependencies to open the assessment development test.

## 🫀 Prerequisites

- [Node > 16.17.1](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Ruby 2.7.5](https://www.ruby-lang.org/en/) and rvm (Recommended: Use [rvm](https://rvm.io/))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14.3](https://developer.apple.com/xcode)
- [Cocoapods 1.12.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## 🍒 Base dependencies

- [React Native version 0.66.1](https://reactnative.dev)
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.

## 🚀 Running the App

You can start by cloning this repository and using [assessment-shan](https://github.com/shandhiviyarajan/interview-assessment-shan). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

- [Clone the Repository](https://github.com/shandhiviyarajan/interview-assessment-shan)
- Run `cd iApp` then `yarn` to install node dependancies
- Run `cd ios && pod install` to install iOS Dependancies
- Run in iOS simulators `yarn ios`
- Run in Android Emulators `yarn android`

## Folder structure

This template follows a very simple project structure:

- `components`: This folder is the main container of all the code inside your application.
  - `atoms`: This folder contains all actions that can be dispatched to redux.
  - `molecules`: Asset folder to store all images, vectors, etc.
  - `organisms`: Folder to store any common component that you use through your app (such as a generic button)
  - `templates`: Folder to store any kind of constant that you have.
  - `screens`: Folder to store all your network logic (you should have one controller per resource).
- `core`: Folder to store the languages files.
  - `routes`: Folder to store the navigators.
  - `services` Api Calls
  - `interceptors` Axios instance in the httpClient.js. It uses interceptors to define common side effects for the responses.
  - `redux`: This folder should have all your reducers
  - `constants`: Folder that contains all your application constants.
  - `utils`: All utilities & helper functions
  - `selectors`: Folder to store your selectors for each reducer.
  - `hooks`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `theme`: Folder to store all the styling concerns related to the application theme.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

DEV: `.env` `yarn ios` or `yarn android`

STG: Not available

PROD: Not available

## Generate production version
