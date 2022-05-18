/* Iida Peltonen 2022 */

import { useState } from 'react'

//uuden lisäys
const BlogForm = ({ uusiBlogi }) => {
  const [newTitle, setNewTitle] = useState('') //nimet
  const [newAuthor, setNewAuthor] = useState('') //kirjoittajat
  const [newUrl, setNewUrl] = useState('') //osoitteet
  const [newLikes, setNewLikes] = useState('') //tykkäykset

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

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
        title: newTitle,
        author: newAuthor,
        url: newUrl,
        likes: newLikes
    }

    uusiBlogi(blogObject)
}

return(
    <div>
      <h1>Add new blog</h1>
      <form onSubmit={addBlog}>
        <label htmlFor="title">Title</label>
        <input
          id="input"
          name="title"
          value={newTitle}
          onChange={handleTitleChange}
        /><br></br>
        <label htmlFor="author">author</label>
        <input
          id="author"
          name="author"
          value={newAuthor}
          onChange={handleAuthorChange}
        /><br></br>
        <label htmlFor='url'>url</label>
        <input
          id="url"
          name="url"
          value={newUrl}
          onChange={handleUrlChange}
        /><br></br>
        <label htmlFor='url'>likes</label>
        <input
          id="likes"
          name="likes"
          value={newLikes}
          onChange={handleLikesChange}
        /><br></br>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm
