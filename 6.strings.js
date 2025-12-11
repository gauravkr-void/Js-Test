const myName = new String('Gaurav')

// console.log(myName[0]);
// console.log(myName.__proto__);

const name = "Naughty"
const lastName = "Tomato"

console.log(`My Favourite flavour in kurkure is ${name} ${lastName}`);



console.log(myName.length); // To get the length of the string
console.log(myName.toUpperCase()); // to convert into upper case
console.log(myName.toLowerCase()); // To convert into lower case 

console.log(myName.charAt(5));  // To get the character the at the index
console.log(myName.indexOf('u')); // To get the index of the character

const newName = myName.substring(0, 3);
console.log(newName);
