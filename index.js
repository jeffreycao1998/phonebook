require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  let inPhonebook;
  Person.find({ name: req.body.name }, () => inPhonebook = true)
  
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Name missing!'
    })
  }
  if (!req.body.number) {
    return res.status(400).json({
      error: 'Number missing!'
    })
  }
  if (inPhonebook) {
    return res.status(400).json({
      error: 'Name must be unique!'
    })
  }

  const person = new Person({
    name: req.body.name,
    number: req.body.number,
  })

  person
    .save()
    .then(savedPerson => {
      res.json(savedPerson)
    })
})

app.put('/api/persons/:id', (req, res, next) => {
  Person
    .updateOne({ name: req.body.name },{ number: req.body.number })
    .then( person => {
      res.json(person)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
})