function sayname(){
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayname()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(5,5);

function addTwoNumbers(num1,num2){
    // let result=num1 + num2
    // return result
    return num1+num2
}

const result=addTwoNumbers(5,5)
// console.log("Result is:",result)

//another way
function loginusermessage(username ="sam"){
    if(!username){
        console.log("Please enter the name")
        return 
    }
     return `${username} is loggedin`
}

// console.log(loginusermessage("Hrushi"))
// console.log(loginusermessage("hrushi"))

//video 2

function claculatecartprice(...num1){//rest operator and also spread operator//(val1,val2,...num1) is optional
    return num1
}

// console.log(claculatecartprice(200,300,400,500,600));

const user={
    name:"Hrushi",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} & price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     name:"Jayraj",
//     price:522
// })

const myNewArray=[100,200,300,400,500]

function returnvlaue(getarray){
    return getarray[0]
}
// console.log(returnvlaue(myNewArray))
