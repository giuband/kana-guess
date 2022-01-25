import isClient from './isClient'
import kana, { KanaValue, StoredError, Syllable, syllables } from './kana'

const ERROR_PICKING_PROB = 0.75
export const ERRORS_QUEUE_KEY = 'errors-queue'

const getRandomSyllable = (): Syllable => {
  const index = Math.floor(Math.random() * syllables.length)
  return syllables[index]
}

const getRandomAlphabet = () => {
  return Math.random() > 0.5 ? 'hira' : 'kata'
}

export const getAllErrors = (): StoredError[] => {
  if (!isClient()) {
    return []
  }
  return JSON.parse(localStorage.getItem(ERRORS_QUEUE_KEY) || '[]')
}

const pickError = (errors: ReturnType<typeof getAllErrors>): KanaValue => {
  const randomErrorIndex = Math.floor(Math.random() * errors.length)
  const { alphabet, syllable } = errors[randomErrorIndex]
  return {
    value: kana[syllable][alphabet].value,
    syllable,
    alphabet,
  }
}

export const getRandomKana = (): KanaValue => {
  const allErrors = getAllErrors()
  const shouldPickError =
    allErrors.length > 0 && Math.random() <= ERROR_PICKING_PROB
  if (shouldPickError) {
    return pickError(allErrors)
  }
  const syllable = getRandomSyllable()
  const alphabet = getRandomAlphabet()
  return { value: kana[syllable][alphabet].value, syllable, alphabet }
}
