const express = require('express')
const path = require('path')
const app = express()
const variables = require('./src/data/variables.json')
const data = [
  require('./src/data/EIB.json'),
  require('./src/data/UBG.json'),
  require('./src/data/BW.json'),
  require('./src/data/KJV.json'),
  require('./src/data/BBE.json')
]

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/data', (req, res, next) => {
  (req.query.bible && req.query.book && req.query.chapter)
  ? res.json(data[req.query.bible][req.query.book][req.query.chapter])
  : res.json(variables)
})

app.listen(9000)
