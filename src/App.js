import React from 'react'
import Loading from './components/Loading'
import VerseTable from './components/VerseTable'
import SearchBar from './components/SearchBar'
import { BIBLES } from './variables'

let VERSES
let BIBLE

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bible: localStorage.getItem('bible') || 0,
      book: localStorage.getItem('book') || 0,
      chapter: localStorage.getItem('chapter') || 0,
      loading: true
    }

    this.fetchBible(this.state.bible)

    this.handleBibleChange = this.handleBibleChange.bind(this)
    this.handleBookChange = this.handleBookChange.bind(this)
    this.handleChapterChange = this.handleChapterChange.bind(this)
  }

  fetchBible(bible) {
    fetch(`/bible/${BIBLES[bible]}.json`)
    .then(resp => resp.json())
    .then(resp => {
      BIBLE = resp
      VERSES = BIBLE[this.state.book][this.state.chapter]

      this.setState({
        verses: VERSES,
        loading: false
      })
    })
  }

  handleBibleChange(e) {
    const bible = parseInt(e.target.value)

    this.setState({
      bible: bible,
      loading: true
    }, () => {
      this.fetchBible(this.state.bible)
      localStorage.setItem('bible', this.state.bible)
    })
  }

  handleBookChange(e) {
    const book = parseInt(e.target.value)
    VERSES = BIBLE[book][0]

    this.setState({
      book: book,
      chapter: 0,
      verses: VERSES
    }, () => {
      localStorage.setItem('book', this.state.book)
      localStorage.setItem('chapter', this.state.chapter)
    })
  }

  handleChapterChange(e) {
    const chapter = parseInt(e.target.value)
    VERSES = BIBLE[this.state.book][chapter]

    this.setState({
      chapter: chapter,
      verses: VERSES
    }, () => {
      localStorage.setItem('chapter', chapter)
    })
  }

  render() {
    window.scrollTo(0,0)

    return (
      <>
        <SearchBar
          bible={this.state.bible}
          book={this.state.book}
          chapter={this.state.chapter}
          onBibleChange={this.handleBibleChange}
          onBookChange={this.handleBookChange}
          onChapterChange={this.handleChapterChange}
        />
        {this.state.loading ? <Loading /> :
        <VerseTable
          verses={this.state.verses}
        />}
      </>
    )
  }
}

export default App
