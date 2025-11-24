//singleton
//object.create


//object iterals
const user={
    name:"Hrushi",
    age:18,
    location:"Kudal",
    isloggedin:false,
}

// console.log(user);
// console.log(user.name);
// console.log(user[" location","name"]);

//for overwrite
user.name="Hrushikesh Ajgaonkar"
// Object.freeze(user);
// console.log(user);

user.greetingTwo = function() {
  console.log(`Hello js user${this.name} & age is ${this.age}`);
};

console.log(user.greetingTwo());
