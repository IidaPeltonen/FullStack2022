import { useState } from 'react'

const Statistiikka = ({ good, neutral, bad, allClicks, allClicksYht, positiiviset}) => {
  /*tähän se tulostuskoodi*/
  return (
    <div>
      <h2>Statistiikka</h2>
      <p>Huippu: {good}</p>  
      <p>Neutraali: {neutral}</p>  
      <p>Huono: {bad}</p> 
      <p>Ääniä yhteensä: {(allClicks-1)} </p> 
      <p>Äänien keskiarvo: {allClicksYht/(allClicks-1)}</p>
      <p>Äänistä positiivisia: {positiiviset/(allClicks-1) * 100}  %</p>
    </div>
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

export default App
