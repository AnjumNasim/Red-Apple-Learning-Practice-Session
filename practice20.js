

function isOdd(x){
    return x%2 !=0;
}

function loop1(y, f){
    let result = [];
    for (x=0; x<y.length; x++){
        if (f(y[x])){
            result.push(y[x])
        }
    }
    return result;
}

let y = [1,3,4,5,7,9,8];
console.log(loop1(y, isOdd))
