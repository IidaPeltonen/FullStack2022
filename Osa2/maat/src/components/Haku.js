/* Iida Peltonen 2022 */

import React, { useState } from 'react'
import Maa from './Maa'
import Maalista from './Maalista'

const Haku = ({ maat }) => {
  const [wordEntered, setWordEntered] = useState('')
  const [filteredData, setFilteredData] = useState([maat])
  const [tulos, setTulos] = useState('')

  function handleHaku (e) {
    const hakusana = e.target.value
    setWordEntered(hakusana)
    const newFilter = maat.filter(value => {
      return value.name.official.toLowerCase().includes(hakusana.toLowerCase()) 
    })
    setFilteredData(newFilter)
    setTulos(newFilter.length)
  }

  return (
    <div>
      Etsi maa <input onChange={handleHaku} value={wordEntered} tulos={tulos} />
      {wordEntered.length === 0 && (
        // ei tulosteta mitään, jos hakua ei ole tehty
        <div>
          <ul></ul>
        </div>
      )}
      {tulos > 10 && wordEntered.length > 0 && (
        //on haettu jotain, ja tuloksia on enemmän kuin 10
        <div>
          <p>Liikaa hakutuloksia, tarkenna hakua</p>
        </div>
      )}
      {tulos < 11 && tulos > 0 && wordEntered.length > 0 && (
        //on haettu jotain, ja tuloksia on 1-10
        <div>
          <ul>
            {filteredData.map(maa => (
              <Maalista key={maa.name.official} maa={maa} />
            ))}
          </ul>
        </div>
      )}
      {tulos === 1 && wordEntered.length > 0 && (
        //on haettu jotain, ja tuloksia on vain 1
        <div>
            {filteredData.map(maa => (
              <Maa key={maa.name.official} maa={maa} />
            ))}
        </div>
      )}
    </div>
  )
}

export default Haku
