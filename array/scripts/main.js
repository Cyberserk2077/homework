// 1.
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
  { name: 'David', age: 45, isAdmin: true },
  { name: 'Jack', age: 21, isAdmin: false },
)

console.log(users)

// 2.
const getUserAverageAge = (users) => {
  let sumAge = 0;

  users.forEach(user => {
    sumAge += user.age
  })

  return sumAge / users.length
}

console.log(getUserAverageAge(users))

// 3.
const getAllAdmins = (users) => {
  let admins = []

  users.forEach(user => {
    if (user.isAdmin) {
      admins.push(user)
    }
  })

  return admins
}

console.log(getAllAdmins(users))

// 4.
const first = (arr, n) => {
  if (n === 0) return []
  if (n === undefined) return [arr[0]]

  return arr.slice(0, n)
}

console.log(first(users, 4))

