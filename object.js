const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : 'abc1234'
};
console.log(user);
console.log(user.name);
console.log(user['email']);


user.password = 'xyz1234'
console.log(user);
user.address = 'lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'samsung',
    model : 'galaxy M31',
    price : '14999',
    colors : ['black','blue' ,'red']
    
} ;



// change the model of to galaxy s24
// accesss the second color
// replace the first color with 'white'
//add a new color 'green'


console.log(smartphone.colors[1]);
smartphone.model = 'galaxy s24';
console.log(smartphone);
smartphone.colors[0] = 'white';
console.log(smartphone);
smartphone.colors.push('green');
console.log(smartphone);