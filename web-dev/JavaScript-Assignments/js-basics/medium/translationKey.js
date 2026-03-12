const obj = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}

const result = {}

for (const lang in obj) {
  for (const word in obj[lang]) {

    if (!result[word]) {
      result[word] = {}
    }

    result[word][lang] = obj[lang][word]
  }
}

console.log(result)
//output:{
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }
