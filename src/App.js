import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import VerseTable from './components/VerseTable'
import SearchBar from './components/SearchBar'

export default () => {
  const [bible, setBible] = useState(localStorage.getItem('bible') || 0)
  const [book, setBook] = useState(localStorage.getItem('book') || 0)
  const [chapter, setChapter] = useState(localStorage.getItem('chapter') || 0)
  const [verses, setVerses] = useState()

  useEffect(() => {
    fetch(`/data?bible=${bible}&book=${book}&chapter=${chapter}`)
    .then(resp => resp.json())
    .then(resp => setVerses(resp))
  }, [bible, book, chapter])

  useEffect(() => localStorage.setItem('bible', bible), [bible])
  useEffect(() => localStorage.setItem('book', book), [book])
  useEffect(() => localStorage.setItem('chapter', chapter), [chapter])

  useEffect(() => window.scrollTo(0,0))

  return (
    <>
      <SearchBar
        bible={bible}
        book={book}
        chapter={chapter}
        onBibleChange={e => setBible(e.target.value)}
        onBookChange={e => setBook(e.target.value) && setChapter(0)}
        onChapterChange={e => setChapter(e.target.value)}
      />
      {verses ? <VerseTable verses={verses} /> : <Loading />}
    </>
  )
}
