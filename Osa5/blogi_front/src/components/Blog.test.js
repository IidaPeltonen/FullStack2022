/* Iida Peltonen 2022 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders content', () => {
    const blog = {
        title: 'Uusi',
        author: 'Iida Peltonen',
        url: 'www.iida.fi',
        likes: 5,
        user: { name: 'kalle' }
    }

    render(<Blog blog={blog} title={blog.title} author={blog.author}/>)

    const title = screen.getByText('Uusi')
    expect(title).toBeDefined()

    const author = screen.getByText('Uusi')
    expect(author).toBeDefined()

})

test('clicking the like-button twice calls event handler twice', async () => {
    const blog = {
        title: 'Uusi',
        author: 'Iida Peltonen',
        url: 'www.iida.fi',
        likes: 5,
        user: { name: 'kalle' }
    }

    const mockHandler = jest.fn()

    render(
        <Blog blog={blog} updateBlog={mockHandler} />
    )

    const user = userEvent.setup()
    const button = screen.getByText('Like')
    await user.click(button)
    await user.click(button)

    expect(mockHandler.mock.calls).toHaveLength(2)
})
