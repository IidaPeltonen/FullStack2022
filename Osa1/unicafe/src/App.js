/* Iida Peltonen 2022 */

import { useState } from 'react'

const Statistiikka = ({ good, neutral, bad, allClicks, allClicksYht, positiiviset}) => {
  /*tähän se tulostuskoodi*/
  /* jos ääniä ei ole annettu */
  if ((allClicks-1) === 0) {
      return (

          <p>
            Ääniä ei ole vielä annettu
          </p>
      )
  }
  return (
    <div>
       <h1>Statistiikka</h1>
        <table>
          <tbody>
              <StatisticLine text="Huippu: " value={good} />  
              <StatisticLine text="Neutraali: " value={neutral} />
              <StatisticLine text="Huono: " value={bad} />
              <StatisticLine text="Ääniä annettu: " value={(allClicks -1)} />
              <StatisticLine text="Äänten keskiarvo:" value={allClicksYht/(allClicks-1)} />
              <StatisticLine text="Äänistä positiivisia:" value={positiiviset/(allClicks-1) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
  <tr>
    <td>
      {props.text}
    </td>
    <td>
      {props.value}
    </td>
  </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // muuttujat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(1) /*laskee kaikkien annettujen äänien kappale määrän*/
  const [allClicksYht, setAllYht] = useState(0) /*laskee kaikkien annettujen äänien marvosanat yhteen*/
  const [positiiviset, setPos] = useState(0) /*laskee positiivisten äänten kappalemäärän*/

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    setAllYht(allClicksYht + 1)
    setPos(positiiviset + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
    setAllYht(allClicksYht)
    setPos(positiiviset)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
    setAllYht(allClicksYht - 1)
    setPos(positiiviset)
  }

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={handleGoodClick} text='Huippu!' />
      <Button handleClick={handleNeutralClick} text='Neutraali' />            
      <Button handleClick={handleBadClick} text='Huono!' />            
      <Statistiikka good={good} bad={bad} neutral={neutral} allClicks={allClicks} allClicksYht={allClicksYht} positiiviset={positiiviset} />
    </div>
    
  )
}

console.log('')

export default App
