async function sum(a, b) {
    let add1 = a + b
    return Promise.resolve ({
        message: 'Success'
    }) 
}
sum(45, 30).then((add1)=> {
        console.log(add1)
}) 