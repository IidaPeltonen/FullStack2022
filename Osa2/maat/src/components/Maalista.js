/* Iida Peltonen 2022 */

import { useState } from 'react'
import Maa from './Maa'

let isClickedMaa = false


const Maalista = ({ maa, filteredData }) => {
  const [naytettavaMaa, setNaytettavaMaa] = useState([])

  function HandleClick (maa) {
    isClickedMaa = true
    setNaytettavaMaa(maa)
  }

  function HandleClickSulje (maa) {
    isClickedMaa = false
    setNaytettavaMaa()
  }

  return (
    <div>
      <ul>
        <li key={maa.name.official}>
          {maa.name.official}
          <button onClick={() => HandleClick(maa)}>Näytä tiedot</button>
          <button onClick={() => HandleClickSulje(maa)}>Sulje tiedot</button>
        </li>
      </ul>
      {isClickedMaa && (
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
