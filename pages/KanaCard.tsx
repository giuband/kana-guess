import { useEffect, useRef, useState } from 'react'
import { StoredError, Syllable, syllables } from '../utils/kana'
import {
  ERRORS_QUEUE_KEY,
  getAllErrors,
  getRandomKana,
} from '../utils/randomizers'
import styles from '../styles/Home.module.css'

const addError = ({ syllable, alphabet }: StoredError) => {
  const currentErrors = getAllErrors()
  localStorage.setItem(
    ERRORS_QUEUE_KEY,
    JSON.stringify([...currentErrors, { syllable, alphabet }])
  )
}

const removeError = ({ syllable, alphabet }: StoredError) => {
  const currentErrors = getAllErrors()
  localStorage.setItem(
    ERRORS_QUEUE_KEY,
    JSON.stringify(
      currentErrors.filter(
        (err) => err.alphabet !== alphabet || err.syllable !== syllable
      )
    )
  )
}

/** Due to some romanji corresponding to multiple kanas, remove artificial suffixes added to
 * distinguish between the multiple cases
 */
const sanitiseSyllable = (syllable: Syllable) =>
  syllable.match(/([a-zA-Z]+)\d*/)![1] as Syllable

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
  }, [input.current, disabled])

  useEffect(() => {
    if (inputState !== 'pristine') {
      const timeout = setTimeout(
        () => {
          onRoundEnd()
        },
        inputState === 'error' ? 1500 : 800
      )
      return () => clearTimeout(timeout)
    }
  }, [inputState])

  useEffect(() => {
    const sanitizedNewValue = value.toLowerCase()
    if (sanitizedNewValue === 'n') {
      if (randomKana.syllable === 'n') {
        checkIsRightKana('n')
      } else {
        return
      }
    } else if (sanitizedNewValue.match(/showme/i)) {
      setDisabled(true)
      setTimeout(() => {
        setValue('')
      }, 300)
      const solution = sanitiseSyllable(randomKana.syllable)
      Array.from(solution).forEach((_, i) => {
        setTimeout(() => {
          setValue(solution.slice(0, i + 1))
        }, (i + 2) * 300)
      })
    } else if (syllables.includes(sanitizedNewValue as Syllable)) {
      checkIsRightKana(sanitizedNewValue)
    }
  }, [value])

  const checkIsRightKana = (newValue: string) => {
    setDisabled(true)
    const sanitisedSolution = sanitiseSyllable(randomKana.syllable)
    if (newValue === sanitisedSolution) {
      setInputState('ok')
      removeError({ syllable: newValue, alphabet: randomKana.alphabet })
    } else {
      const shouldStoreSelf = Math.random() < 0.33
      addError({
        syllable: shouldStoreSelf
          ? (newValue as Syllable)
          : randomKana.syllable,
        alphabet: randomKana.alphabet,
      })
      setInputState('error')
    }
  }

  return (
    <div className={styles.card} key={props.round}>
      <h1>{randomKana.value}</h1>
      <input
        type="text"
        disabled={disabled}
        value={value}
        ref={input}
        onChange={(evt) => setValue(evt.target.value)}
        className={styles.input}
        autoFocus
      />
      <div
        className={`${styles.feedback} ${
          inputState === 'error'
            ? styles.feedbackError
            : inputState === 'ok'
            ? styles.feedbackCorrect
            : ''
        }`}
      >
        {inputState === 'error'
          ? sanitiseSyllable(randomKana.syllable)
          : inputState === 'ok'
          ? 'Correct'
          : ''}
      </div>
    </div>
  )
}
