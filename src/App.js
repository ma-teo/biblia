import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import VerseTable from './components/VerseTable'
import SearchBar from './components/SearchBar'
import { BIBLES } from './variables'

export default () => {
  const [bible, setBible] = useState(localStorage.getItem('bible') || 0)
  const [book, setBook] = useState(localStorage.getItem('book') || 0)
  const [chapter, setChapter] = useState(localStorage.getItem('chapter') || 0)
  const [verses, setVerses] = useState()

  useEffect(() => {
    fetch(`/bible/${BIBLES[bible]}.json`)
    .then(resp => resp.json())
    .then(resp => setVerses(resp))
  }, [bible])

  useEffect(() => localStorage.setItem('bible', bible), [bible])
  useEffect(() => localStorage.setItem('book', book), [book])
  useEffect(() => localStorage.setItem('chapter', chapter), [chapter])

  useEffect(() => window.scrollTo(0,0))

  function handleBibleChange(e) {
    setVerses()
    setBible(e.target.value)
  }

  function handleBookChange(e) {
    setBook(e.target.value)
    setChapter(0)
  }

  function handleChapterChange(e) {
    setChapter(e.target.value)
  }

  return (
    <>
      <SearchBar
        bible={bible}
        book={book}
        chapter={chapter}
        onBibleChange={handleBibleChange}
        onBookChange={handleBookChange}
        onChapterChange={handleChapterChange}
      />
      {verses ? <VerseTable verses={verses[book][chapter]} /> : <Loading />}
    </>
  )
}
