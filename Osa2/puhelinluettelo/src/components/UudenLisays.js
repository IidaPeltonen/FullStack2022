/* Iida Peltonen 2022 */
import { useState } from 'react'

const UudenLisays = ({ persons, setPersons }) => {
    const [newPerson, setNewPerson] = useState('') //nimet
    const [newNumber, setNewNumber] = useState('') //numerot

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
        <form onSubmit={LisaaUusi}>
        Nimi: <input value={newPerson} onChange={handlePersonChange} />
        Numero: <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">Tallenna</button>
    </form>
    )
  }
  
  export default UudenLisays

