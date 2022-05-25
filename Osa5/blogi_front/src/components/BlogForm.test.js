/* Iida Peltonen 2022 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
    const handleAddBlog = jest.fn()
    const user = userEvent.setup()

    render(<BlogForm addBlog={handleAddBlog} />)

    const title = screen.getByPlaceholderText('Title')
    const author = screen.getByPlaceholderText('Author')
    const url = screen.getByPlaceholderText('Url')
    const likes = screen.getByPlaceholderText('Likes')
    const sendButton = screen.getByText('Create')

    await user.type(title, 'testblog')
    await user.type(author, 'testblog')
    await user.type(url, 'testblog')
    await user.type(likes, '4')
    await user.click(sendButton)

    expect(handleAddBlog.mock.calls).toHaveLength(1)
    expect(handleAddBlog.mock.calls[0][0]).toEqual({
        newTitle: 'testblog',
        newAuthor: 'testblog',
        newUrl: 'testblog',
        newLikes: '4',
    })
})