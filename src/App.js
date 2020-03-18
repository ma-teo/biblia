import React from 'react';
import './App.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="spinner" />
    );
  }
}

class VerseRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.verse}</td>
      </tr>
    );
  }
}

class VerseTable extends React.Component {
  render() {
    const verses = this.props.verses;
    const rows = [];

    for(let i = 0; i < verses.length; i++) {
      rows.push(
        <VerseRow
          verse={verses[i]}
          index={i+1}
          key={i}
        />
      );
    }

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleBibleChange = this.handleBibleChange.bind(this);
    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleChapterChange = this.handleChapterChange.bind(this);
  }

  handleBibleChange(e) {
    this.props.onBibleChange(e);
  }

  handleBookChange(e) {
    this.props.onBookChange(e);
  }

  handleChapterChange(e) {
    this.props.onChapterChange(e);
  }

  render() {
    const bibles = [];
    const books = [];
    const chapters = [];

    for(let i = 0; i < BIBLES.length; i++) {
      bibles.push(
        <option
          value={i}
          key={i}
        >
          {BIBLES[i]}
        </option>
      );
    }

    for(let i = 0; i < BOOKS.length; i++) {
      books.push(
        <option
          value={i}
          key={i}
        >
          {BOOKS[i]}
        </option>
      );
    }

    for(let i = 0; i < CHAPTERS[this.props.book]; i++) {
      chapters.push(
        <option
          value={i}
          key={i}
        >
          {i+1}
        </option>
      );
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
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bible: localStorage.getItem('bible') || 0,
      book: localStorage.getItem('book') || 0,
      chapter: localStorage.getItem('chapter') || 0,
      loading: true
    };

    this.fetchBible(this.state.bible);

    this.handleBibleChange = this.handleBibleChange.bind(this);
    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleChapterChange = this.handleChapterChange.bind(this);
  }

  fetchBible(bible) {
    fetch(`/bible/${BIBLES[bible]}.json`)
    .then(resp => resp.json())
    .then(resp => {
      BIBLE = resp;
      VERSES = BIBLE[this.state.book][this.state.chapter];

      this.setState({
        verses: VERSES,
        loading: false
      });
    });
  }

  handleBibleChange(e) {
    const bible = parseInt(e.target.value);

    this.setState({
      bible: bible,
      loading: true
    }, () => {
      this.fetchBible(this.state.bible);
      localStorage.setItem('bible', this.state.bible);
    });
  }

  handleBookChange(e) {
    const book = parseInt(e.target.value);
    VERSES = BIBLE[book][0];

    this.setState({
      book: book,
      chapter: 0,
      verses: VERSES
    }, () => {
      localStorage.setItem('book', this.state.book);
      localStorage.setItem('chapter', this.state.chapter);
    });
  }

  handleChapterChange(e) {
    const chapter = parseInt(e.target.value);
    VERSES = BIBLE[this.state.book][chapter];

    this.setState({
      chapter: chapter,
      verses: VERSES
    }, () => {
      localStorage.setItem('chapter', chapter);
    });
  }

  render() {
    window.scrollTo(0,0);

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
    );
  }
}

const BIBLES = ["EIB","UBG","BW","KJV","BBE"];
const BOOKS = ["Rodzaju","Wyjścia","Kapłańska","Liczb","Powtórzonego Prawa","Jozuego","Sędziów","Rut","1 Samuela","2 Samuela","1 Królewska","2 Królewska","1 Kronik","2 Kronik","Ezdrasza","Nehemiasza","Estery","Hioba","Psalmów","Przysłów","Kaznodziei","Pieśń nad pieśniami","Izajasza","Jeremiasza","Treny","Ezechiela","Daniela","Ozeasza","Joela","Amosa","Abdiasza","Jonasza","Micheasza","Nahuma","Habakuka","Sofoniasza","Aggeusza","Zachariasza","Malachiasza","Mateusza","Marka","Łukasza","Jana","Dzieje Apostolskie","Rzymian","1 Koryntian","2 Koryntian","Galacjan","Efezjan","Filipian","Kolosan","1 Tesaloniczan","2 Tesaloniczan","1 Tymoteusza","2 Tymoteusza","Tytusa","Filemona","Hebrajczyków","Jakuba","1 Piotra","2 Piotra","1 Jana","2 Jana","3 Jana","Judy","Objawienie"];
const CHAPTERS = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];

let VERSES;
let BIBLE;

export default App;