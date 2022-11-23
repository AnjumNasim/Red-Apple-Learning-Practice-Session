// Anonymous Funtion
/*let b = Function;
let a = function () {
    return 15 + 10
} 
    console.log(a())

*/

















//Promise Approve

/*async function sum(a, b) {
     return a + b
}
console.log(sum(4, 5))
*/

//Promise Return

async function sum(a, b) {
    let add1 = a+b 
    return Promise.resolve({
        message:'success'
    })

}
sum(45, 65).then(
    (add1)=> {
        console.log(add1)
    }   
)




