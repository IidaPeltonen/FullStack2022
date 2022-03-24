/* Iida Peltonen 2022 */

import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
    id: 1,
    name: 'Pekka',
    number: '04175895231'
  },
  {
    id: 2,
    name: 'Tiina',
    number: '05001263456'
  },
  {
    id: 3,
    name: 'Jalmari',
    number: '08-1111578'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)





