import React from 'react'
import { BIBLES, BOOKS, CHAPTERS } from "../variables"

export default (props) => {
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

  for(let i = 0; i < CHAPTERS[props.book]; i++) {
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
