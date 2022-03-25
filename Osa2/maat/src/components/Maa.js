/* Iida Peltonen 2022 */

//näyttää yhden maan tiedot
import Weather from './Weather'

const Maa = ({ maa }) => {
  let lat = maa.latlng[0]
  let lon = maa.latlng[1]

  return (
    <>
      <h1>{maa.name.common}</h1>
      Pääkaupunki: {maa.capital} <br />
      Alue: {maa.region} <br />
      Aluekoodi: {maa.area} <br />
      <h3>Kielet: </h3>
      <div>
        {Object.values(maa.languages).map(language => (
          <p key={language}>{language}</p>
        ))}
      </div>
      <img src={maa.flags.png} />
      <h3>{maa.capital} tarjoilee tällä hetkellä seuraavanlaista säätä: </h3>
      <Weather lat={lat} lon={lon} />
    </>
  )
}

export default Maa
