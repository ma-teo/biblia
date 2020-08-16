import React, { useState, useEffect } from 'react'
import Loading from './components/loading'
import SearchBar from './components/search-bar'
import VerseTable from './components/verse-table'

const App = () => {
  const [variables, setVariables] = useState()
  const [bible, setBible] = useState(localStorage.getItem('bible') || 0)
  const [book, setBook] = useState(localStorage.getItem('book') || 0)
  const [chapter, setChapter] = useState(localStorage.getItem('chapter') || 0)
  const [verses, setVerses] = useState(JSON.parse(localStorage.getItem('verses')))

  useEffect(() => {
    fetch('/data')
    .then(resp => resp.json())
    .then(data => setVariables(data))
  }, [])

  useEffect(() => {
    fetch(`/data/${bible}/${book}/${chapter}`)
    .then(resp => resp.json())
    .then(data => setVerses(data))
  }, [bible, book, chapter])

  useEffect(() => localStorage.setItem('bible', bible), [bible])
  useEffect(() => localStorage.setItem('book', book), [book])
  useEffect(() => localStorage.setItem('chapter', chapter), [chapter])
  useEffect(() => localStorage.setItem('verses', JSON.stringify(verses)), [verses])

  useEffect(() => window.scrollTo(0,0))

  return (
    <>
      {variables ? <SearchBar
        bibles={variables.bibles}
        books={variables.books}
        chapters={variables.chapters}
        bible={bible}
        book={book}
        chapter={chapter}
        onBibleChange={e => setBible(e.target.value)}
        onBookChange={e => setBook(e.target.value) || setChapter(0)}
        onChapterChange={e => setChapter(e.target.value)}
      /> : null}
      {verses ? <VerseTable verses={verses} /> : <Loading />}
    </>
  )
}

export default App
