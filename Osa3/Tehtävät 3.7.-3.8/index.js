const express = require('express')
const morgan = require("morgan");
const app = express()

let persons = [
  {
    id: 1,
    name: "Pentti Hirvonen",
    number: "040112"
  },
  {
    id: 2,
    name: "Pekka Kaikkonen",
    number: "04010022"
  },
  {
    id: 3,
    name: "Anu Saukko",
    number: "040118"
  },
  {
    id: 4,
    name: "Pekka Karvonen",
    number: "040112112"
  },
  {
    id: 5,
    name: "Antti Hirvi",
    number: "050140"
  },
]

app.use(
  morgan('tiny')
)

//haku id-numerolla
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

//kaikkien luettelo
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

//poisto id:n perusteella
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

//idn luonti uudelle
const generateId = () => {
  const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
  const taulukonIsoin = Number(maxId) + 1
  const uusiId = (Math.floor(Math.random() * 1000) + taulukonIsoin) 
    return uusiId
  }
  
  //uuden luonti
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    //jos uudelle hlöllä ei ole nimeä
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
    //jos uudelle hlöllä ei ole numeroa
    if (!body.number) {
      return response.status(400).json({ 
        error: 'number missing' 
      })
    }
    //jos uudelle hlö on jo  luettelossa

    persons.forEach((item, index) => {
      //jos sama nimi löytyy
      if (item.name.toLowerCase() === body.name.toLowerCase()) {
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
      }
  
      const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
      }
    
      persons = persons.concat(person)
      response.json(person)
  })
})

//info-sivu
app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info over  ${persons.length}  people </p>
    <p> ${new Date().toString()} </p>`
  )
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
