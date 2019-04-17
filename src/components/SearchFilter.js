import React, { useState } from 'react'

const SearchFilter = ({ onFilter }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    const {
      target: {
        value,
      },
    } = event

    setQuery(value)
    onFilter(value)
  }

  return (
    <div className="form-group">
      <label htmlFor="">Filter Badges</label>
      <input 
        type="text" 
        className="form-control" 
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchFilter