async function sum(a, b) {
    let add1 = a + b
    return Promise.resolve ({
        message: 'Success'
    }) 
}
sum(45, 30).then((add1)=> {
        console.log(add1)
}) 


// let add = (a,b)=>{
    
//         return new Promise((resolve, reject)=>{
//             sum = a+b;
//             let result = false;
//             if (result){
//                 console.log('Promise is resolved ' + sum )
//                 resolve ();
//             }
//             else {
//                 console.log('Promise is not resolved ' + sum)
//                 reject();
//             }
//         })
// }
// add (20,30).then(()=>{
//     console.log('Thanks! Visit again ' + sum)
// }).catch(()=>{
//     console.log('Sorry! Visit again ' + sum)
// })




