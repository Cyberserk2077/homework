// 1.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue
  }
  console.log(i)
}

// 2.
const initialValue = +prompt('Введите число', 0)
let result = 1;

for (let i = 1; i <= initialValue; i++) {
  result *= i
}

console.log(`Факториал от ${initialValue} = ${result}`)

// 3.
// for (let row = 0; row < 8; row++) {
//   let line = ''
//
//   for (let column = 0; column < 8; column++) {
//     if ((row + column) % 2 === 0) {
//       line += '#'
//     } else {
//       line = ' '
//     }
//   }
//
//   console.log(line)
// }