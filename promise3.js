// Promise 

// let p = new Promise ((resolve, reject)=>{
//     console.log('Hi')
// })


// // >> Hi >> Promise {pending}

// console.log(p);









// let o = new Promise ((resolve,reject)=>{
    
//     function great(a,b){

//         if (a>b){
//         return true;
//         resolve();
//         }else {
//         return false;
//         reject();
//         }
//     }
//     console.log(great(10,12))    
// })
// o.then((alert)=>{
//     console.log(alert)   
// }).catch((error)=>{
//     console.log(error)
// })








// let p = new Promise((resolve, reject)=>{
//     console.log('promise is pending')
//     setTimeout(()=>{
//         console.log('Hello Anjum')
//         resolve();
//     } ,3000)
// })

// console.log(p);










/// previous Exam Question 

// var a = (x, y)=>{
//     return new Promise((resolve, reject)=>{
//         if (x>y){
//             console.log('Winner');
//             resolve({
//                 value: x,
//                 message: 'Congrats!'
//             });
//         }else{
//             console.log('Loser');
//             reject({
//                 value: y,
//                 message: 'You need to learn more'
//             });
//         }

//     })

// }
// a(50,49).then((x)=>{
//     console.log(x)
// }).catch((k)=>{
//     console.log(k + 'hi')
// })



//Promise using objects

let obj = {

            sun(a,b){
                return a+b;
            }

}

console.log(obj.sun(15,12))
