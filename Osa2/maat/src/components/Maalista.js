/* Iida Peltonen 2022 */

import { useState } from 'react'
import Maa from './Maa'

const Maalista = ({ maa }) => {

  const [naytettavaMaa, setNaytettavaMaa] = useState([])

  function HandleClick(maa) {
    setNaytettavaMaa(maa)
    //ei vaan toimi, en tajua mitä tähän pitis tunkea, että voisi kutsua Maa-osiota uudella arvolla
     
    return (
      <div>
        
        <Maa key={naytettavaMaa.name} maa={naytettavaMaa} />
      </div>
    ) 
  }
console.log(naytettavaMaa.name)
  return (
    <div>
      <ul>
        <li key={maa.name.official}>
          {maa.name.official}
          <button onClick={() =>HandleClick(maa)}>
            Näytä tiedot
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Maalista
