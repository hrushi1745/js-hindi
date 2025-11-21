//Arrays

const myarray=[0,1,5,7];
// console.log(myarray[2]);

//Array Methods

myarray.push(50);
myarray.push(100);
// console.log(myarray);
// myarray.pop();

// myarray.unshift(10);
// myarray.shift();

// console.log(myarray.indexOf(7));
// const newarray=myarray.join();
// console.log(myarray);
// console.log(newarray);
// console.log(typeof newarray);

console.log("A",myarray)
const myn1=myarray.slice(1,3)

console.log(myn1);
console.log("B",myarray)

const myn2=myarray .splice(1,3);
console.log("C",myarray);
console.log(myn2);