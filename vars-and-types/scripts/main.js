// 1.
const firstName = 'Anastasiia'
const lastName = 'Semenova'
const isStudent = true

// 2.
const age = 29
const currentYear = 2026
const birthYear = currentYear - age
console.log('Year of birth:', birthYear)

// 3.
const message =
  `
My name is ${firstName} ${lastName}, I am ${age} years old.
I am a student: ${isStudent}
  `
console.log(message)

//4. 
let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

console.log(result)

