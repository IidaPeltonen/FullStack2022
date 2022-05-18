/* Iida Peltonen 2022 */

//uuden lisäys
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
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default BlogForm
