
const arr = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

const obj = {}

for (let i = 0; i < arr.length; i++) {
  const category = arr[i].category
  const price = arr[i].price

  if (!obj[category]) {
    obj[category] = 0
  }

  obj[category] += price
}

console.log(obj)

//output:{ electronics: 300, clothes: 50 }
