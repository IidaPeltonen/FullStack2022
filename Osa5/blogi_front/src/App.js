/* Iida Peltonen 2022 */

import { useState, useEffect, useRef } from 'react'

import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
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
        blogService.getAll().then(initialBlogs => {
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
                username,
                password
            })
            setUser(user)
            blogService.setToken(user.token)
            window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
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
        blogFormRef.current.toggleVisibility()
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
                setErrorMessage(`New blog ${returnedBlog.title.toString()} added`)
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

    //vanhan päivitys
    const updateBlog = id => {
    //haetaan sen blogin tiedot, jonka kohdalla like-nappia on painettu
        const likedBlog = blogs.find(blog => blog.id === id)

        const blogObject = {
            title: likedBlog.title,
            author: likedBlog.author,
            url: likedBlog.url,
            user: likedBlog.user,
            likes: likedBlog.likes + 1
        }

        blogService
            .update(id, blogObject)
            .then(returnedBlog => {
                setBlogs(
                    blogs.map(blog => (blog.id === returnedBlog.id ? returnedBlog : blog))
                )
                setErrorMessage('Like added')
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            .catch(error => {
                setErrorMessage(error.response.data)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }

    //blogin poisto
    const removeBlog = id => {
    //haetaan sen blogin id, jonka nappia on painettu
        const removedBlog = blogs.find(blog => blog.id === id)

        let vastaus = false
        vastaus = window.confirm(`Poistetaanko ${removedBlog.title}?`)
        if (vastaus) {
            blogService.remove(removedBlog.id)
            setErrorMessage(`${removedBlog.title} poistettu luettelosta`)
            setTimeout(() => {
                setErrorMessage(null)
                window.location.reload(false)
            }, 5000)
        }
    }

    const handleTitleChange = event => {
        setNewTitle(event.target.value)
    }

    const handleAuthorChange = event => {
        setNewAuthor(event.target.value)
    }

    const handleUrlChange = event => {
        setNewUrl(event.target.value)
    }

    const handleLikesChange = event => {
        setNewLikes(event.target.value)
    }

    const logOut = () => {
        window.localStorage.removeItem('loggedBlogappUser')
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

    const blogFormRef = useRef()

    return (
        <div>
            <h1>BLOGS</h1>
            <Notification message={errorMessage} />

            {user === null ? (
                loginForm()
            ) : (
                <div>
                    <p>
            Logged in as {user.username}
                        <button onClick={logOut}>Logout</button>
                    </p>

                    <Togglable buttonLabel='Add new blog' ref={blogFormRef}>
                        <BlogForm
                            newTitle={newTitle}
                            newAuthor={newAuthor}
                            newUrl={newUrl}
                            newLikes={newLikes}
                            handleTitleChange={handleTitleChange}
                            handleAuthorChange={handleAuthorChange}
                            handleUrlChange={handleUrlChange}
                            handleLikesChange={handleLikesChange}
                            addBlog={addBlog}
                        />
                    </Togglable>

                    <br />
                    {blogs
                        .sort((a, b) => (a.likes < b.likes ? 1 : -1))
                        .map(blog => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                                updateBlog={updateBlog}
                                removeBlog={removeBlog}
                                name={user.name}
                            />
                        ))}
                </div>
            )}
        </div>
    )
}

export default App
