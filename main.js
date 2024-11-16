const http = require('http')
const fs = require('fs')
const PORT = 3000

const filePath = process.argv[2]

if (!filePath) {
  console.error(
    'Error: No file path provided. Please specify a file path as an argument.'
  )
  process.exit(1)
}

// TODO: Create an HTTP server
const server = http.createServer((req, res) => {
  const method = req.method
  if (method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end(`Error: File not found at path ${filePath}`)
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(data)
    })
  }
})

// TODO: Listen on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Serving file: ${filePath}`);
})

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)
