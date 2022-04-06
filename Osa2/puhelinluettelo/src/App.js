/* Iida Peltonen 2022 */

import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import UudenLisays from './components/UudenLisays'
import personService from './services/persons'

const App = props => {
  const [persons, setPersons] = useState(props.persons) //kaikki tyypit

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Filter persons={persons} />
      <h2>Tallenna uusi</h2>
      <UudenLisays persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App