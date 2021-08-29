import { useState } from 'react'
import isClient from '../utils/isClient'
import styles from '../styles/Home.module.css'

const getErrors = (): Array<{ correct: string; answer: string }> =>
  isClient()
    ? JSON.parse(window.localStorage.getItem('kana-errors') || '[]')
    : []

export default function ErrorList(props: { round: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const errors = getErrors()
  if (!errors.length) {
    return null
  }
  return (
    <div className={styles.errorList}>
      {isExpanded && (
        <table style={{ fontSize: 14, width: 200 }}>
          <thead>
            <tr style={{ fontWeight: 800 }}>
              <td style={{ width: '50%', textAlign: 'center' }}>Symbol</td>
              <td style={{ width: '50%', textAlign: 'center' }}>Your answer</td>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, index) => (
              <tr key={index} style={{ borderBottom: '1px solid white' }}>
                <td style={{ textAlign: 'center' }}>{error.correct}</td>
                <td style={{ textAlign: 'center' }}>{error.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          className={styles.button}
          style={{ marginTop: isExpanded ? 20 : 0 }}
        >
          {isExpanded ? 'Collapse' : 'Show errors'}
        </button>
        {isExpanded && (
          <button
            onClick={() => {
              window.localStorage.removeItem('kana-errors')
              setIsExpanded(false)
            }}
            type="button"
            className={styles.button}
            style={{
              marginTop: isExpanded ? 20 : 0,
              marginLeft: 8,
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
