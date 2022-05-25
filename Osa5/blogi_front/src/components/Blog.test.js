/* Iida Peltonen 2022 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
    const blog = {
        title: 'Uusi',
        author: 'Iida Peltonen',
        url: 'www.iida.fi',
        likes: 5,
    }

    render(<Blog blog={blog} title={blog.title} author={blog.author}/>)

    const title = screen.getByText('Uusi')
    expect(title).toBeDefined()

    const author = screen.getByText('Uusi')
    expect(author).toBeDefined()

})
