const arr = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

const obj = {}

for (let i = 0; i < arr.length; i++) {
  const user = arr[i].user
  const amount = arr[i].amount

  if (!obj[user]) {
    obj[user] = 0
  }

  obj[user] += amount
}

console.log(obj)


//output:{ A: 150, B: 200 }
