
const yargs = require('yargs');


const geocode = require('./geocode/geocode.js');

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

console.log(argv.address);

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if(errorMsg){
        console.log(errorMsg);
    }else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});



