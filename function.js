function addNums (a,b){
   var c=a+b;
    console.log(c);

}
addNums(25,47);
//console.log(c);
const getAvg= function(m1,m2,m3){
    var avg = (m1+m2+m3)/3;
   // console.log(avg);
   return avg;
}
const result = getAvg(5,7,9);
console.log(result);

const factorial = (n) => {
    let fact=1;
    for(let i=2;i<=n;i++){
        fact=fact*i;
     }
     return fact;
}
const f1 =factorial(5);
console.log(f1);