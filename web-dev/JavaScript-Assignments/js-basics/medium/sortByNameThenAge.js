
const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]

const result = arr.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age
  }
  return a.name.localeCompare(b.name) //this sorts alphabetically
})

console.log(result)

//output:[
//   { name: "Alice", age: 22 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 }
// ]

