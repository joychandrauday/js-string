console.log('========slice========')
const address='patuakhali';
const slicePart= address.slice(2,5);

console.log(slicePart)
console.log('========split========')
const sentence='i am happy to see you';
console.log(sentence.split(' '))
console.log(sentence.split('a'))
console.log(sentence.split('a'))
const friends1='fahim,rahim,karim,joshim';
const friends=['fahim','rahim','karim','rakib']
console.log(friends1.split(','))
console.log('========join========')
console.log(friends.join('|'))
console.log('========Concat========')
const firstName='abid';
const lastName='hasan';
const fullName=firstName+" "+lastName
console.log(fullName);
const fullName2=firstName.concat(' ').concat(lastName)
console.log(fullName2);
console.log('========includes========')
console.log(lastName.includes("a"));