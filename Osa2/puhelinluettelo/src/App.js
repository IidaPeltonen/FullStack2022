/* Iida Peltonen 2022 */

import { useState } from 'react'
import Person from './components/Person'
import Filter from'./components/Filter'
import UudenLisays from'./components/UudenLisays'

const App = props => {
  const [persons, setPersons] = useState(props.persons) //kaikki tyypit
  
  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <div>
        <Filter persons={persons} />
        Tähän tulee hakukenttä
    </div>
        <ul>
          {persons.map(person =>
            <Person key={person.id} person={person} />
          )}
        </ul>
        <h2>Tallenna uusi</h2>
        <UudenLisays persons={persons} setPersons={setPersons} />

    </div>
  )
}

export default App
