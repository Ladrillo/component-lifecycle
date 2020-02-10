const express = require('express')
const cors = require('cors')
const uuid = require('uuid')

const app = express()
app.use(express.json())
app.use(cors())

const makeFriend = (name) => ({
  id: uuid(),
  age: Math.floor(Math.random(99) * 99),
  name,
})

app.get('/friends/:name/followers', (req, res) => {
  res.json(['John', 'Alison', 'Kelechi'].map(name => makeFriend(name)))
})

app.get('/friends/:name', (req, res) => {
  res.json(makeFriend(req.params.name))
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'no such endpoint' })
})

app.listen(4000, () => {
  console.log('listening on 4000')
})
