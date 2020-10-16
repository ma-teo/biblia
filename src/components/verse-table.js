import VerseRow from './verse-row'

const VerseTable = ({verses}) => (
  <table>
    <tbody>
      {verses.map((verse, key) => (
        <VerseRow
          key={key}
          index={key + 1}
          verse={verse}
        />
      ))}
    </tbody>
  </table>
)

export default VerseTable
