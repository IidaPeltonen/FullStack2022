/* Iida Peltonen 2022 */

import { useState, useEffect } from 'react'

import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import './css/App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('') //nimet
  const [newAuthor, setNewAuthor] = useState('') //kirjoittajat
  const [newUrl, setNewUrl] = useState('') //osoitteet
  const [newLikes, setNewLikes] = useState('') //tykkäykset
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  //BLOGFROM SEURAAVAKSI NÄKYMÄÄN VAIN, JOS KÄYTTÄJÄ ON PAINANUT "ADD BLOG"

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  //muuttuja kirjautumisen hallintaan
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
      setErrorMessage(null)
      setUsername('')
      setPassword('')
      }, 5000)
    }
  }

  //uuden lisäys
  const addBlog = event => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setErrorMessage('Blog added')
        setTimeout(() => {
          setErrorMessage(null)
          setNewTitle('')
          setNewAuthor('')
          setNewUrl('')
          setNewLikes('')
          }, 5000)
      })
      .catch(error => {
        setErrorMessage(error.response.data)
        setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
      })
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const handleLikesChange = (event) => {
    setNewLikes(event.target.value)
  }

  const logOut = () => {
    window.localStorage.removeItem(
      'loggedBlogappUser'
    )
    window.location.reload(false)
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        Username
        <input
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        Password
        <input
          type='password'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  )

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <div>
      Title
        <input 
          type='text'
          value={newTitle} 
          name='title'
          onChange={handleTitleChange} 
        />
      </div>
      <div>
      Author
        <input 
          type='text'
          value={newAuthor} 
          name='author'
          onChange={handleAuthorChange} 
        />
      </div>
      <div>
      Url
        <input 
          type='text'
          value={newUrl} 
          name='url'
          onChange={handleUrlChange} 
        />
      </div>
      <div>
      Likes
        <input 
          type='number'
          value={newLikes} 
          name='authir'
          onChange={handleLikesChange} 
        />
      </div>
      <br  />
      <button type='submit'>Save</button>
    </form>
  )
  
  
return (
  <div>
    <h1>BLOGS</h1>
    <Notification message={errorMessage} />

    {user === null ?
      loginForm() :
      <div>
        <p>Logged in as {user.username} 
        <button onClick={logOut}>Logout</button></p>
        {blogForm()}
        <br />
        <div>
          {blogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    }
  </div>
  )
}

export default App
