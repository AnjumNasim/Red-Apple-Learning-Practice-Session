/*let b=65

var a = function () {
    return 'hello world'
} 

console.log(b)
console.log(a())
*/

function prime(x) {
    for(y=1; y<=x; y++) {
        if(x%y ==0){
            console.log(y + ' is a prime number ')
        }else {
            console.log(y + ' is not a prime number ')
        }
    }


} 
prime(29)
