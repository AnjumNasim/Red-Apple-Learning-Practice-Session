/*let x = 1;
while (x < 11) {
    console.log(x)
    x +=1

} 

let x = 1;

while (x < 10) {
    console.log(x)
    x++
}*/







function prime(x) {
    for(y=2; y<x; y++) {
        if(x%y ==0){
            return 'false'
        }else {
            return 'true'
        }
    }


} console.log(prime(29))







/*function prime(x) {
    do {
        y=2;
        y++;

        if (x%y !=0) {
            return 'true'
        }else {
            return 'false'
        } 
    
    }
    while (y<x)
}
console.log(prime(19))*/





