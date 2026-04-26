// 1.
const number = 9

if (number % 2 === 0) {
  console.log('Число чётное')
} else {
  console.log('Число нечётное')
}

// 2.
const age = 70
const discount = (age < 18) ? '10%' : (age >= 18 && age <= 65) ? '20%' : '30%'

console.log('Скидка составила:', discount)

// 2.*
// const age = 29
// let discount;
//
// switch (true) {
//   case age < 18:
//     discount = '10%'
//     break
//   case age >= 18 && age <= 65:
//     discount = '20%'
//     break
//   default:
//     discount = '30%'
// }
//
// console.log('Скидка составила:', discount)

// 3. 
const username = prompt('Введите имя пользователя', '')
const password = +prompt('Введите пароль', 0)

if ((username === 'admin' || username === 'user') && password === 123456) {
  alert('Доступ разрешен')
} else {
  alert('Доступ запрещен')
}

// 4*.
// const packageWeight = +prompt('Введите вес посылки', 0)
// const deliveryType = prompt('Введите тип доставки', '')
//
// if (packageWeight <= 0) {
//   alert('Некорректный вес посылки')
// } else if (deliveryType !== 'Стандарт' && deliveryType !== 'Экспресс' && deliveryType !== 'Премиум') {
//   alert('Неверный тип доставки')
// } else {
//   const basePrice = (packageWeight < 1) ? 5
//     : (packageWeight > 1 && packageWeight <= 5) ? 10
//       : 15
//
//   let rate
//
//   switch (deliveryType) {
//     case 'Стандарт' :
//       rate = 1
//       break
//     case 'Экспресс':
//       rate = 1.5
//       break
//     case 'Премиум':
//       rate = 2
//   }
//
//   const finalPrice = basePrice * rate
//
//   alert(`Итоговая стоимость доставки: ${finalPrice}$`)
// }
