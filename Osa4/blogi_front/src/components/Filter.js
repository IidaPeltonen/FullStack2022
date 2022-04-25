/* Iida Peltonen 2022 */

import React, { useState } from 'react'
import Blog from './Blog'

const Filter = ({ blogs }) => {
  const [wordEntered, setWordEntered] = useState('')
  const [filteredData, setFilteredData] = useState([blogs])

  function handleFilter (e) {
    const hakusana = e.target.value
    setWordEntered(hakusana)
    const newFilter = blogs.filter(value => {
      return value.name.toLowerCase().includes(hakusana.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  return (
    <div>
      Hae kaveria <input onChange={handleFilter} value={wordEntered} />
      {wordEntered.length !== 0 && (
        <div>
          <ul>
            {filteredData.map(blog => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
      )}
      {wordEntered.length === 0 && (
        <div>
          <ul>
            {blogs.map(blog => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Filter