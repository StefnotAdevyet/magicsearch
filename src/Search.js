import React, { Component } from 'react';


class Search extends React.Component {


  render () {
    return (
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">search for a card</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Seach for a card"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search