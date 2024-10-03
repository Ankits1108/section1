const nums = [3, 7, 9, 2, 1, 6, 8];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('-----')

for(let n of nums){
    console.log(n);
}

console.log('-----')

nums.forEach((a,b) => { console.log(a,b); });
console.log('-----')

// wap to print all even no. from the array
 
for (let i = 0; i < nums.length; i++)
{
    if(nums[i]%2==0)
    console.log(nums[i]);
}
console.log('-----')

//wap to filter all odd no.
const odds =[];
nums.forEach((a) =>
{
    if(a%2 !== 0){
       // console.log(a);
       odds.push(a);
    }
});
console.log(odds);
console.log('-----')

// wap to store square of all nums in another array

const squares = [];
    nums.forEach((a) =>{
   //console.log(a**2);
   squares.push(a**2)
    })
    console.log(squares);

    // map functions

    const sqr = nums.map((n) => {return n**2});
    console.log(sqr);
    
    //

    const names = ['raju','aman','ayush','harshu'];
    console.log('sdsd'.toUpperCase());
        const upperNames = names.map((n) => {return n.toUpperCase()});
        console.log(upperNames);

        // wap to convert all prices into integer
        const prices =['₹234.56','₹345.67','₹456.78','₹567.89','₹678.90']
        const intprices = prices.map((p) => { return parseInt(p.slice(1))})
        console.log(intprices);
        


        const prices2 =[2400,340,890,430,12000,340];
        // add 18% gst to all prices
        //console.log( 3400 + 3400 * 0.18);
       const gstprices = prices2.map((m) => {return m=m+(m*.18) })
       console.log(gstprices);
       

        //filter 
        const budgetprices = prices2.filter( (p)  => {return p<1000});
        console.log(budgetprices);
        

        const nums2 =[3,7,9,2,1,6,8];
        //filter all odd numbers
        const oddnums = nums2.filter((s) => {return s%2 !== 0 });
        console.log(oddnums);

        const friendsNames =  ['raju','aman','ayush','harshu'];
        const names4 = friendsNames.filter((s) => {return (s.length > 4)});
        console.log(names4);




