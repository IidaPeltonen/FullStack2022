import { useState } from 'react'
import Person from './components/Person'


const App = props => {
  const [persons, setPersons] = useState(props.persons) 
  const [newPerson, setNewPerson] = useState('')

  //uuden lisäys
  const LisaaUusi = (e) => {
    e.preventDefault()
    const personObject = {
      content: newPerson,
      // id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewPerson('')
  }

  const handlePersonChange = e => {
    console.log(e.target.value)
    setNewPerson(e.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
        <ul>
          {persons.map(person =>
            <Person key={person.name} person={person} />
          )}
        </ul>
        <h2>Tallenna uusi</h2>
        <form onSubmit={LisaaUusi}>
          Nimi: <input value={newPerson} onChange={handlePersonChange} />
          <button type="submit">Tallenna</button>
      </form>
    </div>

  )

}

export default App
