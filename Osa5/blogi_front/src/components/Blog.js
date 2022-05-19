/* Iida Peltonen 2022 */

import '../css/App.css'

const Blog = ({blog, updateBlog}) => (
  <div>
    <b>{blog.title}</b> by: {blog.author} <a href='{blog.url}'>{blog.url}</a> Likes: {blog.likes} <button onClick={updateBlog} >Like</button>
  </div>  
)

export default Blog