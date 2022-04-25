/* Iida Peltonen 2022 */

import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import blogService from './services/blogs'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([]) //kaikki blogit
  const [newTitle, setNewTitle] = useState('') //nimi
  const [newAuthor, setNewAuthor] = useState('') //tekijä
  const [newUrl, setNewUrl] = useState('') //osoite
  const [newLikes, setNewLikes] = useState('') //tykkäykset
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    blogService.getAll().then(initialBlogs => {
      setBlogs(initialBlogs)
    })
  }, [])

  //uuden lisäys
  const LisaaUusi = e => {
    e.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    }
    let id
    let samaNimi = false

    //käydään taulukon nimet läpi ja verrataan
    blogs.forEach((item, index) => {
      //jos sama nimi löytyy
      if (item.title.toLowerCase() === newTitle.toLowerCase()) {
        samaNimi = true
        // vaihdetaan "uuden" idksi vanhan id
        id = item.id
      }
    })

    if (samaNimi) {
      let vastaus = window.confirm(
        `${newBlog} löytyy jo luettelosta, päivitetäänkö blogin tiedot?`
      )
      if (!vastaus) {
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes('')
      } else {
        blogService
          .update(id, blogObject)
          .then(returnedBlog => {
            setBlogs(blogs.concat(returnedBlog))
            setNewTitle('')
            setNewAuthor('')
            setNewUrl('')
            setNewLikes('')
            setSuccess(`${returnedBlog.name} tiedot päivitetty!`)
            setTimeout(() => {
              setSuccess(null)
              window.location.reload(false)
            }, 5000)
          })
          .catch(error => {
            console.log(error.response.data)
            setError(error.response.data.error)
            setTimeout(() => {
              setError(null)
              window.location.reload(false)
            }, 5000)
          })
      }
    } 
    //jos nimi on oikeasti uusi
    else {
      blogService
        .create(blogObject)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes('')
        setSuccess(newBlog + ' lisätty luetteloon')
        setTimeout(() => {
          setSuccess(null)
          window.location.reload(false)
        }, 5000)
      })
      .catch(error => {
        console.log(error.response.data)
        setError(error.response.data.error)
        setTimeout(() => {
          setError(null)
          window.location.reload(false)
        }, 5000)
      })
    }
  }

  const handleTitleChange = e => {
    setNewTitle(e.target.value)
  }

  const handleAuthorChange = e => {
    setNewAuthor(e.target.value)
  }

  const handleUrlChange = e => {
    setNewUrl(e.target.value)
  }

  const handleLikesChange = e => {
    setNewLikes(e.target.value)
  }

  return (
    <div>
      <h1>Blogilista</h1>
      <Filter blogs={blogs} />
      <h2>Lisää uuden blogin tiedot</h2>
      <form onSubmit={LisaaUusi}>
        <Notification message={success} message2={error} />
        Title: <input value={newTitle} onChange={handleTitleChange} />
        <br />
        Author: <input value={newAuthor} onChange={handleAuthorChange} />
        <br />
        Url: <input value={newUrl} onChange={handleUrlChange} />
        <br />
        Likes: <input value={newLikes} onChange={handleLikesChange} />
        <br />
        <button type='submit'>Tallenna</button>
      </form>
    </div>
  )
}

export default App
