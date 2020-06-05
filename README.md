# Weather-Journal App Project

## Introduction
This project's aim is to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Workflow

* Install Node and the packages Express, Body-Parser, and Cors from the terminal, inlude them in the `server.js` file.

* Add a GET route that returns the projectData object in the server code. Then, add a POST route that adds incoming data to projectData.

* Acquire API credentials from OpenWeatherMap website, use it to create a url that retrives weather data.

* Chain another Promise that makes a POST request to add the API data, as well as data entered by the user.

* Update the UI dynamically.
