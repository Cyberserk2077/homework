// 1.
const person = {
  name: 'Настя',
  age: 29,
  isProgrammer: true,
}
console.log(`Имя: ${person.name}`)
console.log(`Возраст: ${person.age}`)
console.log(`Программист: ${person.isProgrammer}`)

// 2.
const isEmpty = (object) => {
  for (const key in object) {
    return false
  }
  return true
}
console.log(isEmpty(person))

// 3.
const task = {
  title: 'Task',
  description: 'Complete task',
  isCompleted: false,
}

const cloneAndModify = (object, modifications) => {
  const task2 = {...object, ...modifications}

  for (const key in task2) {
    console.log(task2[key])
  }
}

cloneAndModify(task, {isCompleted: true})

// 4.
const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод'
}

const callAllMethods = (object) => {

  for (const key in object) {
    if (typeof object[key] === 'function') {
      object[key]()
    }
  }
}

callAllMethods(myObject)

