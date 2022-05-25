/* Iida Peltonen 2022 */

import '../css/App.css'

//jos user id on sama kuin blog.userid, pitää näkyä poisto
const Blog = ({ blog, updateBlog, removeBlog, name }) => (
    <div>
        <b>{blog.title}</b> by: {blog.author} <a href='{blog.url}'>{blog.url}</a>{' '}
    Likes: {blog.likes}{' '}
        <button onClick={() => updateBlog(blog.id)}>Like</button>
        {/*  {name === blog.user.name ? (
            <button onClick={() => removeBlog(blog.id)}>Delete</button>
        ) : (
            <div></div>
        )} */}
    </div>
)

export default Blog
