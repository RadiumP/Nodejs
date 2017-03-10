console.log('Start');

setTimeout(() => {
    console.log('Inside of callback(non-blocking)')
}, 2000);

setTimeout(() => {
    console.log('None delay(non-blocking)')
}, 0);

console.log('Finish');