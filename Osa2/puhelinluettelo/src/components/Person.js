/* Iida Peltonen 2022 */



const Person = ({ person }) => {

  const Poista = ( id ) => {
    //tähän tulee poisto
  }
  
  return (
    <li key={person.id}>
      {' '}
      {person.name} {person.number} <button onClick={Poista} id={person.id}>Poista</button>
    </li>
  )
}

export default Person
