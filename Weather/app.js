
const yargs = require('yargs');


const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//set argv alias
const argv = yargs
.options({
   a:{
       demand: true,
       alias:'address',
       describe:'Address to fetch weather',
       string:true
   } 
})
.help()
.alias('help','h')
.argv;

var lat;
var lng;

console.log(argv.address);



geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if(errorMsg){
        console.log(errorMsg);
    }else {
        lat = results.lat;
        lng = results.lng;
        //lat,lnt, callback
        weather.fetchWeather(lat, lng, (errorMsg, weatherResults)=>{
            if(errorMsg){
                console.log(errorMsg);
            }else {
                console.log(`It's currently ${weatherResults.temperature} and feels like ${weatherResults.apparentTemp}.`);
            }
        });

        console.log(JSON.stringify(results, undefined, 2));
    }
});

//API key: 06b42f9e048eee35695cba0d46dfd1a8 dark sky forecast

//https://api.darksky.net/forecast/06b42f9e048eee35695cba0d46dfd1a8/37.8267,-122.4233