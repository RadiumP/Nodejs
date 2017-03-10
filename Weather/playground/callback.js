var getUser = (id, callback) =>{
    var user ={
        id,
        name:'Gkla'
    };
    setTimeout(()=>{
        callback(user); 
    }, 3000);
   
};

getUser(1,(userObj)=>{
    console.log(userObj);
});