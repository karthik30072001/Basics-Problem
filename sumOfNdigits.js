//Sum of N digits
let num1=34873
let sum =0;
while(num1>0){
    sum = Math.floor(sum+num1%10)
    num1 = Math.floor(num1/10)
}
console.log(sum)
//multiplu N digits
let a = 28478
let mul =1;
while(a>0){
    mul = Math.floor(mul * (a%10))
    a = Math.floor(a/10)

}
console.log(mul)