const express = require('express')
const path = require('path')
const app = express()

const data = [
  require('./data/EIB.json'),
  require('./data/UBG.json'),
  require('./data/BW.json'),
  require('./data/KJV.json'),
  require('./data/BBE.json')
]

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/data', (req, res, next) => {
  (req.query.bible && req.query.book && req.query.chapter)
  ? res.json(data[req.query.bible][req.query.book][req.query.chapter])
  : next()
})

app.listen(9000)
