/* Iida Peltonen 2022 */

import blogService from '../services/blog'
import Notification from './Notification'
import { useState } from 'react'
import '../css/App.css'

const Blog = ({ blog }) => {
  const [success, setSuccess] = useState('')

  const Poista = blog => {
    let vastaus = false
    vastaus = window.confirm(`Poistetaanko ${blog.name} tiedot?`)
    if (vastaus) {
      blogService.remove(blog.id)
      setSuccess(`${blog.name} poistettu luettelosta`)
      setTimeout(() => {
        setSuccess(null);
        window.location.reload(false);
      }, 4000);
    }
  }

  return (
    <li key={blog.id}>
      {' '}
      {blog.title} {blog.author} {blog.url} {blog.likes}{' '}
      <button onClick={() => Poista(blog)}>Poista</button>
      <Notification message={success} />
    </li>
  )
}

export default Blog