
const yargs = require('yargs');
const axios = require('axios');


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


var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBknEX0mdC_9_HK2yJprer7pAj_j5b59zE`;


//chaining over nesting
axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');
    }
    
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/06b42f9e048eee35695cba0d46dfd1a8/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temp = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp} and feels like ${appTemp}.`)
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    }else{
        console.log(e.message);
    }
    //console.log(e);
});



//API key: 06b42f9e048eee35695cba0d46dfd1a8 dark sky forecast

//https://api.darksky.net/forecast/06b42f9e048eee35695cba0d46dfd1a8/37.8267,-122.4233