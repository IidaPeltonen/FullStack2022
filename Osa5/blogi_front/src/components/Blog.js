/* Iida Peltonen 2022 */

import '../css/App.css'

const Blog = ({blog}) => (
  <div>
    <b>{blog.title}</b> by: {blog.author} <a href='{blog.url}'>{blog.url}</a> Likes: {blog.likes} 
  </div>  
)

export default Blog