import React from 'react'
import { BIBLES, BOOKS, CHAPTERS } from "../variables"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleBibleChange = this.handleBibleChange.bind(this)
    this.handleBookChange = this.handleBookChange.bind(this)
    this.handleChapterChange = this.handleChapterChange.bind(this)
  }

  handleBibleChange(e) {
    this.props.onBibleChange(e)
  }

  handleBookChange(e) {
    this.props.onBookChange(e)
  }

  handleChapterChange(e) {
    this.props.onChapterChange(e)
  }

  render() {
    const bibles = []
    const books = []
    const chapters = []

    for(let i = 0; i < BIBLES.length; i++) {
      bibles.push(
        <option
          value={i}
          key={i}
        >
          {BIBLES[i]}
        </option>
      )
    }

    for(let i = 0; i < BOOKS.length; i++) {
      books.push(
        <option
          value={i}
          key={i}
        >
          {BOOKS[i]}
        </option>
      )
    }

    for(let i = 0; i < CHAPTERS[this.props.book]; i++) {
      chapters.push(
        <option
          value={i}
          key={i}
        >
          {i+1}
        </option>
      )
    }

    return (
      <div id="search">
        <select
          name="bible"
          aria-label="Wybierz przekład"
          value={this.props.bible}
          onChange={this.handleBibleChange}
        >
          {bibles}
        </select>
        <select
          name="book"
          aria-label="Wybierz księgę"
          value={this.props.book}
          onChange={this.handleBookChange}
        >
          {books}
        </select>
        <select
          name="chapter"
          aria-label="Wybierz rozdział"
          value={this.props.chapter}
          onChange={this.handleChapterChange}
        >
          {chapters}
        </select>
      </div>
    )
  }
}

export default SearchBar
