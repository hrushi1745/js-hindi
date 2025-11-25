//Loops

for(let index=0;index<10;index++){
    const eleement=index;
    if(eleement==5){
        // console.log("5 is best number");
        
    }
    // console.log(eleement);
    
}
 
//2nd Loop
for(let i=1;i<=10;i++){
    // console.log(`outer value is ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`inner loop value is ${j}  and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

//3rd example
let myarray=['Hrushi','Jayraj','Shlok']
// console.log(myarray.length);


for(let i=0;i<myarray.length;i++){
    const element=myarray[i];
    // console.log(element);
    
}

//Break and Continue

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5");
//         break
        
//     }
//     console.log(`Value is ${i}`);

// }

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Detected 5");
        continue
        
    }
    console.log(`Value is ${i}`);

}