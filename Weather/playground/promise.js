var asyncAdd = (a,b)=>{
  return new Promise((resolve, reject)=>{
      if(typeof a === 'number' && typeof b === 'number'){
          resolve(a+b);
      }else{
          reject('Must be numbers');
      }
  });  
};

asyncAdd(5,7).then((res)=>{
    console.log(res);
    return asyncAdd(res, 3);//chaining
}).then((res)=>{
    consoloe.log(res);
}).catch((errorMsg)=>{
    console.log(errorMsg);
});










var somePromise = new Promise((resolve, reject)=> {
    
    //either ... 
    resolve('Hello! Promise');
    //or...
    //reject('GG');
});


somePromise.then((msg)=>{
   console.log(msg); 
}, (errorMsg)=>{
    console.log(errorMsg);
});