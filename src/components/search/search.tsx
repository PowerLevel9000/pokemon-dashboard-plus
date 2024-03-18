import React, { useState } from 'react'

const search = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Pokemon Name or Id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id='search'
        />
      </form>

    </>
  )
}

export default search