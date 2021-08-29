import kana, { Syllable, syllables } from './kana'

const getRandomSyllable = (): Syllable => {
  const index = Math.floor(Math.random() * syllables.length)
  return syllables[index]
}

const getRandomAlphabet = () => {
  return Math.random() > 0.5 ? 'hira' : 'kata'
}

export const getRandomKana = () => {
  const syllable = getRandomSyllable()
  const alphabet = getRandomAlphabet()
  return { value: kana[syllable][alphabet].value, syllable, alphabet }
}
