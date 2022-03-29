const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    name: 'Pentti Hirvonen',
    number: '040112'
  },
  {
    id: 2,
    name: 'Pekka Kaikkonen',
    number: '04011002'
  },
  {
    id: 3,
    name: 'Anu Saukko',
    number: '040118'
  }
]

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (person) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.get('/api/persons', (req, res) => {
  res.json(notes)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => person.id !== id)
  response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
  
    const persons = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
