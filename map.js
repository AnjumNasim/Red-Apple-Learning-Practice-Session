//Map
let a = [1,2,3,4,5,6,7,8,9];
let o = [[1,2],[3,4],[5,6],[7,8],[9]];

let x = [];
let y = [];

a.map((j, i)=>{
    if (i%2==0 && i!=0){
        y.push(x);
        x = [];
        x.push(j);
    } else {
        x.push(j);
    }
})

y.push(x)

console.log(y)

















// a.filter(function(v, i){
//     if (i%2==0){
//         return true
//     } else {
//         return false
//     }

// }).map(function(v, i){
//     console.log([v,a[i*2+1]])
// })




