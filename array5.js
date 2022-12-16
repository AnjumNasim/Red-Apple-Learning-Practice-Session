// Array Methods

// let ary = ['Anjum','Biswa','Chintu','Dev','Elle','Fiona','Ganpat','Hardik','Ismail'];
// ary.push('Jester');                     //Adding an element in the END of an Array
// ary.unshift('Zoya');                    //Adding an element in the Beginning of an Array
// ary.pop();                              //Removing the last element of an Array 
// ary.splice(2,1, 'Rahim','Ramirez');     //removing, adding & replacing elements from a desired position 
//                                         //==>>Splice also changes the original array
// let ary1 = ary.slice(2,5);                 //Slice method copies the desired number of elements into the new array without changing the original                       
                                        


// console.log(ary.indexOf('Zoya'));       //Finding the index of a specific element
// console.log(Array.isArray('Anjum'));        //To check if the value is an Array or not
// console.log(ary.length);                //Printing the length of the Array(Total number of elements in the Array)
// console.log(ary1);               





//Array Includes Method
//=>> array.includes method shows whether a object is an array or not
// let BMW = {Name: 'BMW A4'};
// let Toyota = {Name: 'Toyota Innova'};
// let Mercedes = {Name: 'Mercedes Benz'};

// let Cars = [BMW, Toyota];
// console.log(Cars);
// console.log(Cars.includes(BMW));      // True  
// console.log(Cars.includes(Mercedes)); // False





let ary = ['Anjum','Biswa','Chintu','Dev','Elle','Fiona','Ganpat','Hardik','Ismail'];
// console.log(ary.length)

// for (let i in ary){
//     console.log(i)
// }                                // Prints the index of the array


// for (let i of ary){
//     console.log(i)
// }                                // Prints the values of the array        

// ary.forEach((f)=>{
//     console.log(f)
// })                               // For Each runs the function on every element of the array just like for loop

let result = ary.map((l)=>{
    return l
})
console.log(result)

















// ForEach Example

// let a = [1,5,10,15];
// let t = 0;
// a.forEach((z)=>{
//     return t = t + z;
// })

// console.log(t)


// Array Every Method

// let a = [1,5,10,15];
// let r = a.every((c)=>{
//     return c > 0;
// })
// console.log(r);                  // In array.every method it checks the desired condition of every element in an array 





