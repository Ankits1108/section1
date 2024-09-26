//WAP  to print fibbonacci series
let[a,b] = [0,1];
console.log(a);
console.log(b);

 for(let i=0; i<8; i++){
    let c = a+b;
    console.log(c);
    [a,b]=[b,c]

 }
 console.log('----');
 
 // WAP to print all perfect square in range of 50 to 1000

 for(i=50;i<=1000;i++)
{
    let sqrt = i**0.5;
    if(Number.isInteger(sqrt)){

    
    console.log(i);
    }

}
console.log('----');
//WAp to print all prime number in range of 50 to 1000;
for(num=50;num<=1000;num++){
    let prime = true;

    for(let i= 2; i<num; i++){

    
    if(num % i === 0){
        
        prime = false;
        break;
    }
}

if(prime) console.log(num);



}
console.log('-----');
