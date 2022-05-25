
/* Iida Peltonen 2022 */

import '../css/App.css'
import { useState } from 'react'

const BlogForm = ({ addBlog }) => {

    const [newTitle, setNewTitle] = useState('') //nimet
    const [newAuthor, setNewAuthor] = useState('') //kirjoittajat
    const [newUrl, setNewUrl] = useState('') //osoitteet
    const [newLikes, setNewLikes] = useState('') //tykkäykset

    const handleAddBlog = (event) => {
        event.preventDefault()
        addBlog({ newTitle, newAuthor, newUrl, newLikes })
    }

    return(
        <div>
            <h1>Add new blog</h1>
            <form onSubmit={handleAddBlog}>
                <label htmlFor="title">Title </label>
                <input
                    id="title"
                    name="title"
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                    placeholder='Title'
                /><br></br>
                <label htmlFor="author">Author </label>
                <input
                    id="author"
                    name="author"
                    value={newAuthor}
                    onChange={(event) => setNewAuthor(event.target.value)}
                    placeholder='Author'
                /><br></br>
                <label htmlFor='url'>Url </label>
                <input
                    id="url"
                    name="url"
                    value={newUrl}
                    onChange={(event) => setNewUrl(event.target.value)}
                    placeholder='Url'
                /><br></br>
                <label htmlFor='url'>Likes </label>
                <input
                    id="likes"
                    name="likes"
                    type="number"
                    value={newLikes}
                    onChange={(event) => setNewLikes(event.target.value)}
                    placeholder='Likes'
                />
                <br />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm


/*uuden lisäys
const BlogForm = ({
    addBlog,
    newTitle,
    newAuthor,
    newUrl,
    newLikes,
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange,
    handleLikesChange
}) => {

    return(
        <div>
            <h1>Add new blog</h1>
            <form onSubmit={addBlog}>
                <label htmlFor="title">Title </label>
                <input
                    id="title"
                    name="title"
                    value={newTitle}
                    onChange={handleTitleChange}
                    placeholder='Title'
                /><br></br>
                <label htmlFor="author">Author </label>
                <input
                    id="author"
                    name="author"
                    value={newAuthor}
                    onChange={handleAuthorChange}
                    placeholder='Author'
                /><br></br>
                <label htmlFor='url'>Url </label>
                <input
                    id="url"
                    name="url"
                    value={newUrl}
                    onChange={handleUrlChange}
                    placeholder='Url'
                /><br></br>
                <label htmlFor='url'>Likes </label>
                <input
                    id="likes"
                    name="likes"
                    type="number"
                    value={newLikes}
                    onChange={handleLikesChange}
                    placeholder='Likes'
                />
                <br />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm */
