const request = require('request');

var geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {
       
        //encode/decode address
        var encodedAddress = encodeURIComponent(address);
        request({  //url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBknEX0mdC_9_HK2yJprer7pAj_j5b59zE',
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBknEX0mdC_9_HK2yJprer7pAj_j5b59zE`,
            json:true
        }, (error, respone, body)=>{

            //expand the json in body; the number is the space/shift
            //console.log(JSON.stringify(error, undefined, 2));

            //body contains the main info from httprequest: json/html etc
            //response contains all the info

            //error handler
            if(error){
                reject('Unable to connect');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find the address');
            }else if(body.status === 'OK'){
                //parse json
        //        console.log(`Address: ${body.results[0].formatted_address}`);
        //        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
        //        console.log(`Lng: ${body.results[0].geometry.location.lng}`);
                //refactor
                resolve({
                    address:body.results[0].formatted_address,
                    lat:body.results[0].geometry.location.lat,
                    lng:body.results[0].geometry.location.lng
                });
            }    

        });  
        
    });
    

};



geocodeAddress('85281').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) =>{
    console.log(errorMsg);
})