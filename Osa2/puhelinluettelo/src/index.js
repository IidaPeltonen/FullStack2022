import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
    id: 1,
    content: 'Pekka',
  },
  {
    id: 2,
    content: 'Tiina',

  },
  {
    id: 3,
    content: 'Jalmari',

  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)





