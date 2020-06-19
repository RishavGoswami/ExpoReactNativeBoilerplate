# Expo React Native Boilerplate


_This starter kit will allow you to get your react native project along with redux, react-navigation and styled components, up and running in no time, with a simple add-on project for a better understanding of how things connects and everything works with each other._

#### Powered by
![](https://img.shields.io/npm/v/expo?color=blue&label=expo&style=for-the-badge) ![](https://img.shields.io/npm/v/react?color=blue&label=React&style=for-the-badge) ![](https://img.shields.io/npm/v/react-navigation?color=green&label=react%20navigation&style=for-the-badge) ![](https://img.shields.io/npm/v/react-redux?color=purple&label=react%20redux&style=for-the-badge) ![](https://img.shields.io/npm/v/styled-components?color=pink&label=styled%20components&style=for-the-badge) 
![](https://img.shields.io/npm/v/redux-devtools-extension?color=neon&label=redux%20devtools%20extension&style=for-the-badge)


### Folder/File structure
It uses the Atomic Design Pattern, which if mastered provides consistency, modularity, and scalability. If this is something new to you, I highly recommend it and you could learn more about it [here](https://atomicdesign.bradfrost.com/chapter-2/).

 ```
|____ node_modules
|____ assets
|____ app.js ( entry point )
|____ .env.example
|____ .gitignore
|____src
    |____config
       |____Routes.js
    |____constants
       |____index.js
    |____utils
       |____index.js
    |____style
       |____index.js
    |____screens
       |____ProfileScreen.js
       |____DashboardScreen.js
       |____index.js
    |____components
     |____molecules
     |____atoms
        |____Card
           |____index.js
           |____styles.js
        |____Image
           |____index.js
        |____Button
           |____index.js
           |____styles.js
        |____Header
           |____index.js
           |____styles.js
    |____organisms
        |____Dashboard
           |____index.js
           |____styles.js
        |____Profile
           |____index.js
           |____styles.js
    |____redux
        |____middleware
           |____userTiming.js
           |____logger.js
           |____actions.js
        |____enhancers
           |____monitorReducer.js
        |____actions
           |____types
              |____user.js
              |____api.js
        |____creators
           |____user.js
           |____index.js
        |____helper
           |____actions.js
           |____index.js
        |____reducers
           |____user.js
           |____index.js
        |____store
           |____index.js
 ```
### Installation

Install the dependencies and devDependencies and start the project.

Npm users:
```
git clone https://github.com/RishavGoswami/ExpoReactNativeBoilerplate.git 
cd ExpoReactNativeBoilerplate
npm i && expo start
```

Yarn users:
```
git clone https://github.com/RishavGoswami/ExpoReactNativeBoilerplate.git
cd ExpoReactNativeBoilerplate
yarn && expo start
```

#### Add-on project

This is just a simple app which has two screen, Dashboard, where an api call is made for fetching the list of random users from randomuser ( you could find about it [here](https://randomuser.me/) ) and a Profile screen, for displaying the details of the selected user. This project was added just to help you out understanding how the redux and API calls are made ( using [axios](https://www.npmjs.com/package/axios) ). You could simply edit  them to your own taste very easily.

### License
MIT
