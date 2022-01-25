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
  | 'ga'
  | 'gi'
  | 'gu'
  | 'ge'
  | 'go'
  | 'za'
  | 'ji'
  | 'zu'
  | 'ze'
  | 'zo'
  | 'da'
  | 'ji2'
  | 'zu2'
  | 'de'
  | 'do'
  | 'ba'
  | 'bi'
  | 'bu'
  | 'be'
  | 'bo'
  | 'pa'
  | 'pi'
  | 'pu'
  | 'pe'
  | 'po'

type AlphabetRecord = {
  value: string
}

export type Alphabet = Record<
  Syllable,
  {
    hira: AlphabetRecord
    kata: AlphabetRecord
  }
>

export type KanaValue = {
  value: string
  syllable: Syllable
  alphabet: 'hira' | 'kata'
}

export type StoredError = Pick<KanaValue, 'syllable' | 'alphabet'>

const kana: Alphabet = {
  a: {
    hira: { value: 'あ' },
    kata: { value: 'ア' },
  },
  i: {
    hira: { value: 'い' },
    kata: { value: 'イ' },
  },
  u: {
    hira: { value: 'う' },
    kata: { value: 'ウ' },
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
  ga: { hira: { value: 'が' }, kata: { value: 'ガ' } },
  gi: { hira: { value: 'ぎ' }, kata: { value: 'ギ' } },
  gu: { hira: { value: 'ぐ' }, kata: { value: 'グ' } },
  ge: { hira: { value: 'げ' }, kata: { value: 'ゲ' } },
  go: { hira: { value: 'ご' }, kata: { value: 'ゴ' } },
  za: { hira: { value: 'ざ' }, kata: { value: 'ザ' } },
  ji: { hira: { value: 'じ' }, kata: { value: 'ジ' } },
  zu: { hira: { value: 'ず' }, kata: { value: 'ズ' } },
  ze: { hira: { value: 'ぜ' }, kata: { value: 'ゼ' } },
  zo: { hira: { value: 'ぞ' }, kata: { value: 'ゾ' } },
  da: { hira: { value: 'だ' }, kata: { value: 'ダ' } },
  ji2: { hira: { value: 'ぢ' }, kata: { value: 'ヂ' } },
  zu2: { hira: { value: 'づ' }, kata: { value: 'ヅ' } },
  de: { hira: { value: 'で' }, kata: { value: 'デ' } },
  do: { hira: { value: 'ど' }, kata: { value: 'ド' } },
  ba: { hira: { value: 'ば' }, kata: { value: 'バ' } },
  bi: { hira: { value: 'び' }, kata: { value: 'ビ' } },
  bu: { hira: { value: 'ぶ' }, kata: { value: 'ブ' } },
  be: { hira: { value: 'べ' }, kata: { value: 'ベ' } },
  bo: { hira: { value: 'ぼ' }, kata: { value: 'ボ' } },
  pa: { hira: { value: 'ぱ' }, kata: { value: 'パ' } },
  pi: { hira: { value: 'ぴ' }, kata: { value: 'ピ' } },
  pu: { hira: { value: 'ぷ' }, kata: { value: 'プ' } },
  pe: { hira: { value: 'ぺ' }, kata: { value: 'ペ' } },
  po: { hira: { value: 'ぽ' }, kata: { value: 'ポ' } },
}

export const syllables: Array<Syllable> = Object.keys(kana) as Array<Syllable>

export default kana
