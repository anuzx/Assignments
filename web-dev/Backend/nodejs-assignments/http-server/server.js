// start creating server here

import http from "http"
import { URL } from "url"

let id = 1
let todos = [] // {id: "1" , title:"" , description: ""}

const server = http.createServer((req, res) => {

  const { method, url } = req
  const parsedUrl = new URL(`http://localhost:3000${url}`)
  const pathname = parsedUrl.pathname
  const Id = parsedUrl.searchParams.get('id')


  //1. POST /create/todo 
  if (method === "POST" && pathname === "/create/todo") {

    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })


    req.on('end', () => {
      const { title, description } = JSON.parse(body)
      const data = {
        id: id,
        title,
        description
      }

      id++

      todos.push(data)
      res.writeHead(200, "posted", { "content-type": "application/json" })
      res.end(JSON.stringify(todos))
    })

  }

  //2.GET /todos 
  else if (method === "GET" && pathname === "/todos") {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify(todos))
  }

  //3.GET /todo?id=xxx

  else if (method === "GET" && pathname === "/todo" && Id) {
    const todo = todos.find(t => t.id === Number(Id))

    if (!todo) {
      return res.writeHead(404).end(JSON.stringify({ error: "Todo not found" }))
    }

    res.writeHead(200).end(JSON.stringify(todo))
  }

  //4. DELETE /todo?id=xxx 
  else if (method === "DELETE" && pathname === "/todo" && Id) {
    const exist = todos.find(t => t.id === Number(Id))

    if (!exist) {
      return res.writeHead(404).end()
    }

    todos = todos.filter(t => t.id !== Number(Id))

    res.writeHead(200).end()
  }

  //5. GET Hello World
  else if (method === "GET" && pathname === "/") {
    res.writeHead(200)
    res.end('Hello World')
  }
  else {
    res.writeHead(404)
    res.end()
  }
})





server.listen(3000, () => console.log("server running..."))
