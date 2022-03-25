/* Iida Peltonen 2022 */

import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import UudenLisays from './components/UudenLisays'

const App = props => {
  const [persons, setPersons] = useState(props.persons) //kaikki tyypit

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
