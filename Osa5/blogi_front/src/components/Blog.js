/* Iida Peltonen 2022 */

import '../css/App.css'

//jos user id on sama kuin blog.userid, pitää näkyä poisto
const Blog = ({ blog, updateBlog, removeBlog, username }) => (
    <div>
        <b>{blog.title}</b> by: {blog.author} <a href='{blog.url}'>{blog.url}</a>{' '}
    Likes: {blog.likes} Adder: {blog.user.username} Username: {username} {' '}
        <button onClick={() => updateBlog(blog.id)}>Like this blog</button>
        {username === blog.user.username ? (
            <button onClick={() => removeBlog(blog.id)}>Delete</button>
        ) : (
            <div></div>
        )}
    </div>
)

export default Blog
