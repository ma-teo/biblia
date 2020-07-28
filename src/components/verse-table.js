import React from 'react'
import VerseRow from './verse-row'

const VerseTable = props => {
  const verses = props.verses
  const rows = []

  for(let i = 0; i < verses.length; i++) {
    rows.push(
      <VerseRow
        verse={verses[i]}
        index={i+1}
        key={i}
      />
    )
  }

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default VerseTable
