//Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`DB Connected`);
    
// }
// chai()

//2nd option usin iffe
(function chai(){
    //name iife
    console.log(`DB Connected`);
    
})();
( (name)=>{
    console.log(`DB COnnected two ${name}`);
})("Hrushi")