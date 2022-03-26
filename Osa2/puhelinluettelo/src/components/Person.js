/* Iida Peltonen 2022 */

import personService from '../services/persons'

const Person = ({ person }) => {

  const Poista = ( id ) => {
    //tähän tulee poisto
    console.log(person.id) // tämän idn tyypin tiedot pitää poistaa
    
  }
  
  return (
    <li key={person.id}>
      {' '}
      {person.name} {person.number} <button onClick={Poista} id={person.id}>Poista</button>
    </li>
  )
}

export default Person
