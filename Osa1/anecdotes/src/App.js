/* Iida Peltonen 2022 */

import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [aani, setAani] = useState(new Array(6).fill(0))

  const random = () => {
    //tarkistaa anekdootti-taulun pituuden ja arpoo sen sisältä yhden indeksin
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const kopsaa = [...aani]
    kopsaa[selected] += 1
    setAani(kopsaa)
  }

  const maxVoteAnecdote = anecdotes[aani.indexOf(Math.max(...aani))]
  const maxAani = Math.max(...aani)

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      <h3>{anecdotes[selected]}</h3>
      <p>Tällä anekdootilla on {aani[selected]} ääntä</p>
      <button onClick={handleVote}>Äänestä</button>
      <button onClick={random}>Arvo uusi</button>
      
      <h2>Eniten ääniä saanut anekdootti</h2>
      <p>
        {maxVoteAnecdote} lla on <b>{maxAani} ääni.</b>
      </p>
    </div>
  )
}
export default App
