import { useState, useEffect } from 'react'

import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [newTitle, setNewTitle] = useState('') //nimet
  const [newAuthor, setNewAuthor] = useState('') //kirjoittajat
  const [newUrl, setNewUrl] = useState('') //osoitteet
  const [newLikes, setNewLikes] = useState('') //tykkäykset
  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  //muuttuja kirjautumisen hallintaan
  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, passwd
      })
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      setUsername('')
      setPasswd('')
    } catch (exception) {
      alert('Wrong credentials')
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
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes('')
        console.log('Lisäys onnistui')
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
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
          type='passwd'
          value={passwd}
          name='Password'
          onChange={({ target }) => setPasswd(target.value)}
        />
      </div>
      <button type='submit'>login</button>
    </form>
  )

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <input 
        value={newBlog} 
        onChange={handleBlogChange} 
      />
      <button type='submit'>Save</button>
    </form>
  )
  
return (
  <div>
    <h1>BLOGS</h1>

    {user === null ?
      loginForm() :
      <div>
        <p>{user.name} logged in</p>
      {blogForm()}
      </div>
    }


      <div>
        {blogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default App
