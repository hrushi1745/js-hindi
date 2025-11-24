const mumbai_indians=["Rohit Sharma","SKY","Hardik Pandya"];
const rcb=["Virat Kohli","Rajat Patidar","M.Siraj"];

// mumbai_indians.push(rcb);
// console.log(mumbai_indians);

const final_team=mumbai_indians.concat(rcb);
// console.log(final_team);

//spread-operator
const two_temas=[...mumbai_indians,...rcb];
// console.log(two_temas);

//flat array
const myarray=[1,2,3,[4,5,6,],7,[8,9,10,[11,12,13]]];
const narray=myarray.flat(Infinity);
// console.log(narray);

// console.log(Array.isArray("Hrushi"));
// console.log(Array.from("Hrushi"));   //from method convert into array
// console.log(Array.isArray(["Hrushi","Jayraj"]));

let array1=100;
let array2=200;
let array3=300;

console.log(Array.of(array1,array2,array3));



