/* Iida Peltonen 2022 */

import { useState } from 'react'
import Person from './components/Person'
import Filter from'./components/Filter'
import UudenLisays from'./components/UudenLisays'

const App = props => {
  const [persons, setPersons] = useState(props.persons) //kaikki tyypit
  const [newFilter, setNewFilter] = useState("");
  //const [filtPersons, setFiltPersons] = useState(props.persons) //filötteröidyt tyypi

 
  return (
    <div>
      <h1>Puhelinluettelo</h1>
        <Filter persons={persons}  />
        <h2>Tallenna uusi</h2>
        <UudenLisays persons={persons} />

    </div>
  )
}

export default App
