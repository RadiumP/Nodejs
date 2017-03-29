const request = require('request');


 var fetchWeather = (lat, lng, callback) =>{
     request({  
        //url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBknEX0mdC_9_HK2yJprer7pAj_j5b59zE',
    url:`https://api.darksky.net/forecast/06b42f9e048eee35695cba0d46dfd1a8/${lat},${lng}`,
    json:true
}, (error, respone, body)=>{
    
    //expand the json in body; the number is the space/shift
    //console.log(JSON.stringify(error, undefined, 2));
    
    //body contains the main info from httprequest: json/html etc
    //response contains all the info
    
    //error handler
    if(!error && respone.statusCode === 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemp: body.currently.apparentTemperature
        });
    }else {
        callback('Unable to fetch weather');
    }
        //parse json
//        console.log(`Address: ${body.results[0].formatted_address}`);
//        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
//        console.log(`Lng: ${body.results[0].geometry.location.lng}`);
        //refactor
      
       
    
}); 
};
module.exports.fetchWeather = fetchWeather;
    




