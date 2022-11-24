// Promise Return
async function sum(a, b) {
    let add2 = a + b
    return Promise.resolve ({
    message : 'success'})

}
sum(22, 51).then((add2)=> {
    console.log(add2)
})

