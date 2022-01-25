import Head from 'next/head'
import { useState } from 'react'
import KanaCard from './KanaCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [round, setRound] = useState(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>Kana Guess</title>
        <meta
          name="description"
          content="日本語 – Practice reading kana characters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.help}>
          Enter the romaji for the following symbol, or type 'showme' for help
        </div>
        <KanaCard round={round} onRoundEnd={() => setRound(round + 1)} />
      </main>
      <footer>
        Made by{' '}
        <a href="//twitter.com/giuband" title="View @giuband on twitter">
          @giuband
        </a>{' '}
        |{' '}
        <a href="//github.com/giuband/kana-guess" title="View on GitHub">
          View on GitHub
        </a>
      </footer>
    </div>
  )
}
