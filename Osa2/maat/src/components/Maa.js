/* Iida Peltonen 2022 */

//näyttää yhden maan tiedot

const Maa = ({ maa }) => {
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
    </>
  )
}

export default Maa
