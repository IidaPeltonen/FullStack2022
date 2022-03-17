import { useState } from 'react'

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

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Anna palautetta</h1>
      {good}
      <Button handleClick={handleGoodClick} text='Huippu!' />
      {neutral}
      <Button handleClick={handleNeutralClick} text='Neutraali' />
      {bad}
      <Button handleClick={handleBadClick} text='Huono!' />
      <h2>Statistiikka</h2>
      <p>Huippu: {good}</p>  
      <p>Neutraali: {neutral}</p>  
      <p>Huono: {bad}</p>  
    </div>
  )
}


export default App
