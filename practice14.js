// Asynchronous Function

async function sum(a, b) {
    return a + b
}
async function sub(a, b) {
    return a - b
}
sum(10, 15).then(function(x) {
    console.log(x)
})
sub(8, 2).then(function (x) {
    console.log(x)
})
            






