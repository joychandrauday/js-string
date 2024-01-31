console.log('============fetching data from array============')
var person1='ggg';

console.log('=====task-1=====')
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

console.log('=====task-2=====')
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.capacity="5";
console.log(car);

console.log('=====task-3=====')
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

console.log('=====task-4=====')
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let numberProperties=Object.keys(student2).length;
console.log(numberProperties)

console.log('=====task-5=====')
let typeOfKey='';
let person2={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true 
}
let personLength = Object.keys(person2).length;
let values=Object.values(person2)
for (let i = 0; i < personLength; i++) {
    typeOfKey=typeof(values[i]);

    for (const key in person2) {
    
        console.log('key:',`${key} | type:${typeOfKey}`);
    }
}