/* Iida Peltonen 2022 */

import personService from '../services/persons'

const Person = ({ person }) => {

  const Poista = ( person ) => {
    let vastaus = false
    vastaus = window.confirm(`Poistetaanko henkilö ${person.name}?`)
    if (vastaus) {
      personService.remove(person.id)
      alert(`${person.name} poistettu`)
    }
    

    }
    
  return (
    <li key={person.id}>
      {' '}
      {person.name} {person.number} <button onClick={() => Poista(person)}>Poista</button>
    </li>
  )
}

export default Person
