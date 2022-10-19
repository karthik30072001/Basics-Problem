//Sum of N two digits
let num1= 123456
let sum =0;
while(num1>9){
    sum = Math.floor(sum+num1%100)
    num1 = Math.floor(num1/100)
}
console.log(sum)
//Multiply of N two digits
let a= 123456
let mul=1;
while(a>9){
    mul = Math.floor(mul * (a%100))
    a = Math.floor(a/100)
}
console.log(mul)
