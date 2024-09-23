## Forecast Weather App
The ***forecast-weather*** based on selected latitude and longitude - for educational purposes

## How to clone and build it
To get the site up and running on your local machine, follow these steps: 
1. Clone the repository:  
    `git clone https://github.com/BaoBG/Forecast-Weather-App.git`

2. Add all the express modules required (they are listed in the package.json file) by building the project with:  
	`npm i`  

3. Start the server (you can use node or nodemon):  
	`node index.js`  
	or  
	`nodemon index.js`
4. Open your browser:  
	`Navigate to 'http://localhost:3000' to view the app.`

## Technologies used
1. The app was made with NodeJS and ExpressJS web framework
2. The core components are Open-Meteo API on the back-end using Axios and Geographical API on the front-end, as well as Leaflet map.
   - Weather API: https://open-meteo.com/en/docs
   - Time API: https://www.timeapi.io/swagger/index.html

## how to use the app 
1. click "LOCATE" auto-generate LATITUDE and LONGITUDE (allow website to use your location) or fill in the LATITUDE and LONGITUDE of your location
2. click "FORECAST" to access the data
