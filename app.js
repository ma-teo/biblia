const express = require('express')
const path = require('path')
const app = express()

const data = [
  require('../data-biblia/EIB.json'),
  require('../data-biblia/UBG.json'),
  require('../data-biblia/BW.json'),
  require('../data-biblia/KJV.json'),
  require('../data-biblia/BBE.json')
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
