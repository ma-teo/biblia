const express = require('express')
const path = require('path')
const app = express()

const data = [
  require('./static/EIB.json'),
  require('./static/UBG.json'),
  require('./static/BW.json'),
  require('./static/KJV.json'),
  require('./static/BBE.json')
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
