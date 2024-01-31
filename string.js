const country='bangladesh';
const capital="dhaka";
const district='Barisal';
const thana='patuakhali';
const numbers=[33,55,64,73,35]


console.log(capital.length)
console.log(capital[3])

//REVERSE STRING
console.log('==========REVERSE A STRING==========')

const sentence='i will be there for you.'
let reversed='';
for(const letter of sentence){
    reversed= letter+ reversed;
}
console.log(reversed);

for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    
}