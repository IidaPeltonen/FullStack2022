/* Iida Peltonen 2022 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
    const addBlog = jest.fn()

    render(<BlogForm addBlog={addBlog} />)

    const title = screen.getByPlaceholderText('Title')
    const author = screen.getByPlaceholderText('Author')
    const url = screen.getByPlaceholderText('Url')
    const likes = screen.getByPlaceholderText('Likes')
    const sendButton = screen.getByText('Create')

    userEvent.type(title, 'testblog')
    userEvent.type(author, 'testblog')
    userEvent.type(url, 'testblog')
    userEvent.type(likes, '4')
    userEvent.click(sendButton)

    expect(addBlog.mock.calls).toHaveLength(1)
    expect(addBlog.mock.calls[0][0].content).toBe('testblog','testblog','testblog',4)
})