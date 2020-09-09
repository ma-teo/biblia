const express = require('express')
const path = require('path')
const variables = require('../data/variables.json')
const data = [
  require('../data/EIB.json'),
  require('../data/UBG.json'),
  require('../data/BW.json'),
  require('../data/KJV.json'),
  require('../data/BBE.json'),
]

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

app.get('/data', (req, res) => res.json(variables))
app.get('/data/:bible', ({params}, res) => res.json(data[params.bible]))
app.get('/data/:bible/:book', ({params}, res) => res.json(data[params.bible][params.book]))
app.get('/data/:bible/:book/:chapter', ({params}, res) => res.json(data[params.bible][params.book][params.chapter]))

app.listen(3000)
