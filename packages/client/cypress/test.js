/* eslint-disable no-console */
const httpServer = require('http-server')
const { spawn } = require('child_process')

const server = httpServer.createServer()

server.listen(8000)
const tests = spawn('cypress', ['run'], {})
console.log('Server is listening on http://localhost:8000')

tests.on('close', () => {
  console.log('Tests finished! Closing server http://localhost:8000')
  server.close()
})
