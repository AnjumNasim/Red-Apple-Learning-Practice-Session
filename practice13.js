


// Prime number
/*
function prime(x) {
    for(y=1; y<=x; y++) {
        if(x%y ==0){
            console.log(y + ' is a prime number ')
        }else {
            console.log(y + ' is not a prime number ')
        }
    }


} 
prime(25)
*/


/*let isprime=true

function prime(x) {
    for(y=2; y<x; y++) 
    
        if(x%y ==0){
        isprime = false
        break;
        }

        if(isprime==true)
            return 'this is a prime number'

            else   
                return 'this is not a prime'
    }
 console.log(prime(25))
 */


 function prime(x) {
    for(y=2; y<x; y++) {
        if(x%y ==0){
            return 'false'
            break
        }else {
            return 'true'
        }
    }


} console.log(prime(10))








