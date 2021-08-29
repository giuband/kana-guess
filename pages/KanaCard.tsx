import { useEffect, useRef, useState } from 'react'
import kana, { Syllable, syllables } from '../utils/kana'
import { getRandomKana } from '../utils/randomizers'
import styles from '../styles/Home.module.css'

const addError = ({ answer, correct }: { answer: string; correct: string }) => {
  const currentErrors = JSON.parse(localStorage.getItem('kana-errors') || '[]')
  localStorage.setItem(
    'kana-errors',
    JSON.stringify([...currentErrors, { answer, correct }])
  )
}

export default function KanaCard(props: {
  round: number
  onRoundEnd: () => void
}) {
  const { onRoundEnd } = props
  const [randomKana, setRandomKana] = useState(getRandomKana())
  const [inputState, setInputState] = useState<'ok' | 'error' | 'pristine'>(
    'pristine'
  )
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let newKana = getRandomKana()
    while (newKana.value === randomKana.value) {
      // avoid the same symbol on two consecutive rounds
      newKana = getRandomKana()
    }
    setRandomKana(newKana)
    setValue('')
    setInputState('pristine')
    setDisabled(false)
  }, [props.round])

  useEffect(() => {
    if (!disabled) {
      input.current?.focus()
    }
  }, [disabled])

  useEffect(() => {
    if (inputState !== 'pristine') {
      const timeout = setTimeout(() => {
        onRoundEnd()
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [inputState])

  const getKanaForSyllable = (syllable: Syllable) =>
    kana[syllable as Syllable][randomKana.alphabet as 'hira' | 'kata'].value

  const checkIsRightKana = (newValue: string) => {
    setDisabled(true)
    if (newValue === randomKana.syllable) {
      setInputState('ok')
    } else {
      addError({
        answer: `${newValue} (${getKanaForSyllable(newValue as Syllable)})`,
        correct: `${randomKana.syllable} (${randomKana.value})`,
      })
      setInputState('error')
    }
  }

  const onInputChange = (newValue: string) => {
    setValue(newValue)
    if (newValue === 'n') {
      setTimeout(() => {
        setValue((value) => {
          if (value === 'n') {
            checkIsRightKana('n')
          }
          return value
        })
      }, 300)
    } else if (syllables.includes(newValue as Syllable)) {
      checkIsRightKana(newValue)
    }
  }

  return (
    <div
      className={styles.card}
      style={{
        borderColor:
          inputState === 'ok'
            ? 'green'
            : inputState === 'error'
            ? 'red'
            : 'unset',
      }}
    >
      <h1 style={{ fontSize: 130, margin: '0 0 20px' }}>{randomKana.value}</h1>
      <input
        type="text"
        disabled={disabled}
        value={value}
        ref={input}
        onChange={(evt) => onInputChange(evt.target.value)}
        className={styles.input}
      />
      {inputState === 'error' && (
        <>
          <div className={styles.correctAnswer}>{randomKana.syllable}</div>
          <div>Your answer was {getKanaForSyllable(value as Syllable)}</div>
        </>
      )}
    </div>
  )
}
