// normal function ======= 

function sum(a,b){
    return a+b;
}
console.log(sum(5,3));


// arrow function================= 


let sumA=(a,b)=>{
    return a+b;
}
console.log(sumA(5,3));


// random number genration=================== 
//  normal:-------
function random(){
    return Math.random()
}
console.log(random());

// arrow:-------

let randomA=()=>Math.random()
console.log(randomA());


// eventListner ========================

// normal:-
document.addEventListener('click',function(){
    console.log( ("clicked......"));
   
})

// arrow:-

document.addEventListener('click',()=>{
    console.log("arrow cliked.....");
    
})

// arrow oneline shrotcut:-

document.addEventListener('click',()=>console.log("short arrow clicked"))