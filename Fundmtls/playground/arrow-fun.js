var square = (x) => x * x;
//same as var square = x => x * x;
console.log(square(9));

var user = {
    name: 'ASFD',
    sayHi: () => {
        console.log(arguments);
        console.log(`${this.name} says hi`);
    },//undefined
    saybetterHi() {
        console.log(arguments);
        console.log(`${this.name} says hi`);
    }//OK
};

user.sayHi(1,2,3);//arguments contain more than just 1,2,3
user.saybetterHi(1,2,3);