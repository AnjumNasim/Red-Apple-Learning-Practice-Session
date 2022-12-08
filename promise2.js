// Promise - Return / Resolve
/*
let subtraction = (a,b)=>{
    return new Promise ((resolve,reject)=>{
        sub = a-b;
        let result = false;
        if (result){
            console.log('Promise is resolved')
            resolve();
        }
         else {
            console.log('Promise is not resolved')
            reject();
        }
    })

}
subtraction(50,20).then(()=>{
    console.log(sub)
}).catch(()=>{
    console.log(sub)
})
*/


// async function sum (a, b){
//     let add = a + b;
//     return Promise.resolve({
//         message: 'Successful'
// })
// }
// sum(10,20).then((add)=>{
//     console.log(add)
// })


let multiply = (a,b)=>{
    let mult = a*b;
    let result = true;
    return new Promise((resolve, reject)=>{
        if (result){
            console.log('Resolved')
            resolve();
        } else {
            console.log('Rejected')
            reject();
        }

    }) 
}
multiply(4,12).then(()=>{
    console.log(mult)
}).catch(()=>{
    console.log(mult)
})
