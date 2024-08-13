const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.set('port', port)

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})