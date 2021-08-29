export type Syllable =
  | 'a'
  | 'i'
  | 'u'
  | 'e'
  | 'o'
  | 'ka'
  | 'ki'
  | 'ku'
  | 'ke'
  | 'ko'
  | 'sa'
  | 'shi'
  | 'su'
  | 'se'
  | 'so'
  | 'ta'
  | 'chi'
  | 'tsu'
  | 'te'
  | 'to'
  | 'na'
  | 'ni'
  | 'nu'
  | 'ne'
  | 'no'
  | 'ha'
  | 'hi'
  | 'fu'
  | 'he'
  | 'ho'
  | 'ma'
  | 'mi'
  | 'mu'
  | 'me'
  | 'mo'
  | 'ya'
  | 'yu'
  | 'yo'
  | 'ra'
  | 'ri'
  | 'ru'
  | 're'
  | 'ro'
  | 'wa'
  | 'wo'
  | 'n'

type AlphabetRecord = {
  value: string
  similar?: Array<`${Syllable}-hira` | `${Syllable}-kata`>
}

export type Alphabet = Record<
  Syllable,
  {
    hira: AlphabetRecord
    kata: AlphabetRecord
  }
>

const kana: Alphabet = {
  a: {
    hira: { value: 'あ', similar: ['me-hira', 'nu-hira'] },
    kata: { value: 'ア' },
  },
  i: {
    hira: { value: 'い' },
    kata: { value: 'イ' },
  },
  u: {
    hira: { value: 'う', similar: ['tsu-hira'] },
    kata: {
      value: 'ウ',
      similar: ['fu-kata', 'wa-kata', 'ku-kata', 'ra-kata', 'wo-kata'],
    },
  },
  e: {
    hira: { value: 'え' },
    kata: { value: 'エ' },
  },
  o: {
    hira: { value: 'お' },
    kata: { value: 'オ' },
  },
  ka: {
    hira: { value: 'か' },
    kata: { value: 'カ' },
  },
  ki: {
    hira: { value: 'き' },
    kata: { value: 'キ' },
  },
  ku: {
    hira: { value: 'く' },
    kata: { value: 'ク' },
  },
  ke: {
    hira: { value: 'け' },
    kata: { value: 'ケ' },
  },
  ko: {
    hira: { value: 'こ' },
    kata: { value: 'コ' },
  },
  sa: {
    hira: { value: 'さ' },
    kata: { value: 'サ' },
  },
  shi: {
    hira: { value: 'し' },
    kata: { value: 'シ' },
  },
  su: {
    hira: { value: 'す' },
    kata: { value: 'ス' },
  },
  se: {
    hira: { value: 'せ' },
    kata: { value: 'セ' },
  },
  so: {
    hira: { value: 'そ' },
    kata: { value: 'ソ' },
  },
  ta: {
    hira: { value: 'た' },
    kata: { value: 'タ' },
  },
  chi: {
    hira: { value: 'ち' },
    kata: { value: 'チ' },
  },
  tsu: {
    hira: { value: 'つ' },
    kata: { value: 'ツ' },
  },
  te: {
    hira: { value: 'て' },
    kata: { value: 'テ' },
  },
  to: {
    hira: { value: 'と' },
    kata: { value: 'ト' },
  },
  na: {
    hira: { value: 'な' },
    kata: { value: 'ナ' },
  },
  ni: {
    hira: { value: 'に' },
    kata: { value: 'ニ' },
  },
  nu: {
    hira: { value: 'ぬ' },
    kata: { value: 'ヌ' },
  },
  ne: {
    hira: { value: 'ね' },
    kata: { value: 'ネ' },
  },
  no: {
    hira: { value: 'の' },
    kata: { value: 'ノ' },
  },
  ha: {
    hira: { value: 'は' },
    kata: { value: 'ハ' },
  },
  hi: {
    hira: { value: 'ひ' },
    kata: { value: 'ヒ' },
  },
  fu: {
    hira: { value: 'ふ' },
    kata: { value: 'フ' },
  },
  he: {
    hira: { value: 'へ' },
    kata: { value: 'ヘ' },
  },
  ho: {
    hira: { value: 'ほ' },
    kata: { value: 'ホ' },
  },
  ma: {
    hira: { value: 'ま' },
    kata: { value: 'マ' },
  },
  mi: {
    hira: { value: 'み' },
    kata: { value: 'ミ' },
  },
  mu: {
    hira: { value: 'む' },
    kata: { value: 'ム' },
  },
  me: {
    hira: { value: 'め' },
    kata: { value: 'メ' },
  },
  mo: {
    hira: { value: 'も' },
    kata: { value: 'モ' },
  },
  ya: {
    hira: { value: 'や' },
    kata: { value: 'ヤ' },
  },
  yu: {
    hira: { value: 'ゆ' },
    kata: { value: 'ユ' },
  },
  yo: {
    hira: { value: 'よ' },
    kata: { value: 'ヨ' },
  },
  ra: {
    hira: { value: 'ら' },
    kata: { value: 'ラ' },
  },
  ri: {
    hira: { value: 'り' },
    kata: { value: 'リ' },
  },
  ru: {
    hira: { value: 'る' },
    kata: { value: 'ル' },
  },
  re: {
    hira: { value: 'れ' },
    kata: { value: 'レ' },
  },
  ro: {
    hira: { value: 'ろ' },
    kata: { value: 'ロ' },
  },
  wa: {
    hira: { value: 'わ' },
    kata: { value: 'ワ' },
  },
  wo: {
    hira: { value: 'を' },
    kata: { value: 'ヲ' },
  },
  n: {
    hira: { value: 'ん' },
    kata: { value: 'ン' },
  },
}

export const syllables: Array<Syllable> = Object.keys(kana) as Array<Syllable>

export default kana
