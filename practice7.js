let x = 869703

sum = 0;

while (x>0) {
r = x%10;
sum = sum+r;
x = parseInt(x/10)

}
console.log(sum)
