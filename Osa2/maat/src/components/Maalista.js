/* Iida Peltonen 2022 */

import { useState } from 'react'
import Maa from './Maa'

const Maalista = ({ maa, filteredData }) => {
  const [naytettavaMaa, setNaytettavaMaa] = useState([])
  let isClicked = false

  function HandleClick (maa) {
    setNaytettavaMaa(maa)
    isClicked = true
  }

  console.log('isClikedin is now:', isClicked)
  console.log('naytettavaMaa is:', naytettavaMaa)

  return (
    <div>
      <ul>
        <li key={maa.name.official}>
          {maa.name.official}
          <button onClick={() => HandleClick(maa)}>Näytä tiedot</button>
        </li>
      </ul>
      {isClicked && (
        <div>
          <ul>
            <Maa key={naytettavaMaa.name} maa={naytettavaMaa} />
          </ul>
        </div>
      )}
    </div>
  )
}

export default Maalista
