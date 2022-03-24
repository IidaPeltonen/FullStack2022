/* Iida Peltonen 2022 */

import { useState } from 'react'
import Person from './components/Person'


const App = props => {
  const [persons, setPersons] = useState(props.persons) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //uuden lisäys
  const LisaaUusi = (e) => {
    e.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
    }

    //käydän taulukon nimet läpi ja verrataan
    persons.forEach((item, index) => {
      //jos sama nimi löytyy
      if (item.name.toLowerCase() === newPerson.toLowerCase()) {
        alert(newPerson + " löytyy jo luettelosta!")
        setPersons(persons.splice(personObject))
        setNewPerson('')
        setNewNumber('')
      }
      //jos samaa nimeä ei löydy
      else {
        setPersons(persons.concat(personObject))
        setNewPerson('')
        setNewNumber('')
      }
    })
  }

  const handlePersonChange = e => {
    //console.log(e.target.value)
    setNewPerson(e.target.value)
  }

  const handleNumberChange = e => {
    //console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
        <ul>
          {persons.map(person =>
            <Person key={person.id} person={person} />
          )}
        </ul>
        <h2>Tallenna uusi</h2>
        <form onSubmit={LisaaUusi}>
          Nimi: <input value={newPerson} onChange={handlePersonChange} />
          Numero: <input value={newNumber} onChange={handleNumberChange} />
          <button type="submit">Tallenna</button>
      </form>
    </div>
  )
}

export default App
