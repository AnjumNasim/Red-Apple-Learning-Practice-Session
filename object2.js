// function details(callback){

//     let person = {Name:'Anjum', Age:'26', Weight:'74'}
//     console.log(person);
// callback();   

// }




// function getDetails(){
//     console.log('hello')
   
// }
// details(getDetails)















function details(a, b, callback){
    console.log(a+b)
    callback() 
    
}

function callme(){
    console.log('Start')
}

details(5,6, callme)

