const school='Dhaka City College';
const book='Chemistry';
const subject='chemistry';

console.log(school.toLowerCase())
if (book===subject) {
    console.log('they are not same.')
}else if(book.toLowerCase()===subject.toLowerCase()){
    console.log('they are same.')
}else{
    console.log('there are nothing common.')
}