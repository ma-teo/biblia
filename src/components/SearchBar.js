import React from 'react'

export default (props) => {
  const bibles = []
  const books = []
  const chapters = []

  for(let i = 0; i < props.bibles.length; i++) {
    bibles.push(
      <option
        value={i}
        key={i}
      >
        {props.bibles[i]}
      </option>
    )
  }

  for(let i = 0; i < props.books.length; i++) {
    books.push(
      <option
        value={i}
        key={i}
      >
        {props.books[i]}
      </option>
    )
  }

  for(let i = 0; i < props.chapters[props.book]; i++) {
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
        value={props.bible}
        onChange={props.onBibleChange}
      >
        {bibles}
      </select>
      <select
        name="book"
        aria-label="Wybierz księgę"
        value={props.book}
        onChange={props.onBookChange}
      >
        {books}
      </select>
      <select
        name="chapter"
        aria-label="Wybierz rozdział"
        value={props.chapter}
        onChange={props.onChapterChange}
      >
        {chapters}
      </select>
    </div>
  )
}
