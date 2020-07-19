import React from 'react'
import VerseRow from './VerseRow'

export default (props) => {
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
