type Currency =
  | 'AUD'
  | 'BGN'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JPY'
  | 'KRW'
  | 'MXN'
  | 'MYR'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PLN'
  | 'RON'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TRY'
  | 'USD'
  | 'ZAR'

type Rates = {
  [key in Currency]: number
}

type ExchangeRate = {
  amount: number
  base: string
  date: string
  rates: Rates
}

export const getExchangeRate = async () => {
  const res = await fetch('https://api.frankfurter.app/latest?from=DKK')

  if (res.status !== 200) {
    throw new Error('Whoops')
  }

  const data = (await res.json()) as ExchangeRate
  return data
}
