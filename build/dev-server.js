const path = require('path')
const express = require('express')
const app = express()
const PORT = '3000'

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, function () {
  console.info(`dev-server start on ${PORT}`)
})
