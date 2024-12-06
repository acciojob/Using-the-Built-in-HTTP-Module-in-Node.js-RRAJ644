const http = require('http')
const fs = require('fs')

// Create an HTTP server
const server = http.createServer((req, res) => {
  const filePath = process.argv[2]

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, World!\n')
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

