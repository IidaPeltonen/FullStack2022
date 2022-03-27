/* Iida Peltonen 2022 */

import { useState } from 'react'
import personService from '../services/persons'
import '../css/App.css'
import Notification from '../components/Notification'

const UudenLisays = ({ persons, setPersons }) => {
  const [newPerson, setNewPerson] = useState('') //nimet
  const [newNumber, setNewNumber] = useState('') //numerot
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  //uuden lisäys
  const LisaaUusi = e => {
    e.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber
    }
    let id
    let samaNimi = false

    //käydään taulukon nimet läpi ja verrataan
    persons.forEach((item, index) => {
      //jos sama nimi löytyy
      if (item.name.toLowerCase() === newPerson.toLowerCase()) {
        samaNimi = true
        // vaihdetaan "uuden" idksi vanhan id
        id = item.id
      }
    })
    if (samaNimi) {
      let vastaus = window.confirm(`${newPerson} löytyy jo luettelosta, päivitetäänkö numero?`)
      if (!vastaus) {
        setNewPerson('')
        setNewNumber('')
      } else {
        personService
          .update(id, personObject)
          .then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson))
            setNewPerson('')
            setNewNumber('')
              setSuccess(`${returnedPerson.name} n numero päivitetty!`);
              setTimeout(() => {
                setSuccess(null);
                window.location.reload(false);
              }, 5000);
            })
          .catch((error) => {
            setError(`${newPerson} n tiedot on jo poistettu`)
            setTimeout(() => {
              setError(null);
              window.location.reload(false);
            }, 5000);
          })
      }
    } else {
      personService.create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson('')
        setNewNumber('')
        setSuccess(newPerson + 'n numero tallennettu')
        setTimeout(() => {
          setSuccess(null);
          window.location.reload(false);
        }, 5000);
      })
    }
  }

  const handlePersonChange = e => {
    setNewPerson(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  return (
    <form onSubmit={LisaaUusi}>
      <Notification message={success} message2={error} />
      Nimi: <input value={newPerson} onChange={handlePersonChange} />
      <br />
      Numero: <input value={newNumber} onChange={handleNumberChange} />
      <br />
      <button type='submit'>Tallenna</button>
    </form>
  )
}

export default UudenLisays
