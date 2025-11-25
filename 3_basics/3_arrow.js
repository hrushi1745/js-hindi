

const user={
    name:"Hitesh",
    age:18,

    welcomemessage:function(){
        console.log(`${this.name} Welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage()
// user.name="Sam";  //change the value
// user.welcomemessage()
// console.log(this)

// function chai(){
//     console.log(this);
// }

// chai()

// const chai=function(){
//     let username="Hrushi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Hrushi";
    console.log(this);
}

// chai();

//Arrow function

const addTwo= (num1,num2) =>{
    return num1+num2;

}
// console.log(addTwo(3,5));

//Impliicit return function
// const addt=(n1,n2) =>n1+n2
// const addt=(n1,n2) =>(n1+n2)
const addt=(n1,n2) =>(name="Hrushi")

console.log(addt(3,4))
