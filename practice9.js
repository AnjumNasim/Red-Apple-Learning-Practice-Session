/*function sum(S1, S2) {
    if (S1+S2>=89) {
        return 'Qualified for Science'
    } else if (S1+S2>=79 && S1+S2<89) {
        return 'Qualified for Commerce'
    } else if (S1+S2>=69 && S1+S2<79) {
        return 'Qualified for Arts'
    } else {
        return 'Failed'
    }
    
}

console.log(sum(45, 30))
*/


function sum (Name, S1, S2) {
    total = S1+S2;
    if (total>=89) {
        return Name  +' ' +  total + ' Qualified for Science';
    } else if (total>=79) {
        return Name +' ' +  total + ' Qualified for Commerce';
    } else if (total>=69) {
        return Name + ' '  +  total + ' Qualified for Arts';
    } else {
        return Name +' ' +  total + ' Failed';
    }
    
}

console.log(sum('Saba', 45, 30));















