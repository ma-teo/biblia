const express = require('express')
const path = require('path')
const variables = require('./src/data/variables.json')
const data = [
  require('./src/data/EIB.json'),
  require('./src/data/UBG.json'),
  require('./src/data/BW.json'),
  require('./src/data/KJV.json'),
  require('./src/data/BBE.json')
]

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

app.get('/data', (req, res) => res.json(variables))
app.get('/data/:bible', (req, res) => res.json(data[req.params.bible]))
app.get('/data/:bible/:book', (req, res) => res.json(data[req.params.bible][req.params.book]))
app.get('/data/:bible/:book/:chapter', (req, res) => res.json(data[req.params.bible][req.params.book][req.params.chapter]))

app.listen(9000)
