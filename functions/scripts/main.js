// 1.
const calculateFinalPrice = (basePrice, discountPercent, taxRate) => {
  return (basePrice - basePrice * discountPercent / 100) * (1 + taxRate);
}
console.log('Итоговая цена:', calculateFinalPrice(100, 10, 0.2))
console.log('Итоговая цена:', calculateFinalPrice(100, 10, 0))

// 2.
const checkAccess = (username, password) => {
  return username === 'admin' && password === 123456
    ? 'Доступ разрешен'
    : 'Доступ запрещен'
}
console.log(checkAccess('admin', 123456))

// 3.
const getTimeOfDay = (time) => {
  switch (time) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'Ночь'
      break
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'Утро'
      break
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return 'День'
      break
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return 'Вечер'
      break
    default:
      return 'Некорректное время'
      break
  }
}
console.log(getTimeOfDay(15))

// 4.
const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i
    }
  }
  return 'Четных чисел нет'
}
console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));


