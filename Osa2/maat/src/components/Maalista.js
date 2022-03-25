/* Iida Peltonen 2022 */

import Maa from './Maa'

const Maalista = ({ maa }) => {
  function HandleClick (maa) {
    console.log(maa)
    return (
      <div>
        <Maa key={maa.name.official} maa={maa} />
      </div>
    )
  }

  return (
    <div>
      <ul>
        <li key={maa.name.official}>
          {maa.name.official}
          <button onClick={HandleClick} maa={maa}>
            Näytä
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Maalista
