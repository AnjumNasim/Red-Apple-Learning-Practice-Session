// Callback

// function sum(a,b,funcatch){
//     funcatch(a+b);

// }
// (sum(10,12,function(adding){
//         console.log(adding)
// })

// )




// let sub = (a,b,catchfunc)=>{
//     catchfunc(a-b);

// }

// (sub(25,16,function(subtra){
//     console.log(subtra)
// }))




let add =  ((x, y, callfunc)=>{
    callfunc (x + y);
})

add(56, 85,((z)=>{
    console.log(z)
}))

