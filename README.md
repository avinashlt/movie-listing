# Siteminder assignment
An application is developed to seach movies. The application is enabled with pagination. The application is also having a feature to display the movie content and the poster of the respective movie selected.

## Tech stack choice 
Vue.js is used in for front end development.
API are consumed from https://www.omdbapi.com
Axios is used as http client to consume rest api

## File structure

The application is segregated into smart components and dumb component. Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI.

A global styling in defined in styles/colors.css file using the css variables.

Setup module is enabled to setup the global config and import the element ui components in the application.

Service module is set up to make the http call and returns data.

Assets is a module where the images are stored.

The unit testing is implemented in the test module and can be executed in the below given instructions.

## Adaptive Design
The application supports for mobile and desktop. Multiple layouts are designed to achieve the adaptive design.

## Memoization 
Memoization is a mechanism to cache the static data received from the api call.

## Notes
Skipped vuex for this assignment

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test:unit
```
