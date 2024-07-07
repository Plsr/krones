import { getExchangeRate } from '@/data/exchange-rate'
import { useQuery } from '@tanstack/react-query'
import { createContext } from 'react'

type ExchangeRateContextType = {
  date: string
  rate: number
}

const defaultExchangeRateContext = { date: '2024-07-05', rate: 0.13 }

export const ExchangeRateContext = createContext<ExchangeRateContextType>(
  defaultExchangeRateContext,
)

type ExchangeRateProviderProps = {
  children: React.ReactNode
}

export const ExchangeRateProvider = ({
  children,
}: ExchangeRateProviderProps) => {
  const exchangeRateQuery = useQuery({
    queryKey: ['exchangeRate'],
    queryFn: getExchangeRate,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  if (exchangeRateQuery.isLoading) {
    return <p>Loading...</p>
  }

  if (exchangeRateQuery.isError) {
    return (
      <ExchangeRateContext.Provider value={defaultExchangeRateContext}>
        {children}
      </ExchangeRateContext.Provider>
    )
  }

  const exchangeRate = exchangeRateQuery.data!
  const roundedRate = +exchangeRate.rates['EUR'].toFixed(2)

  return (
    <ExchangeRateContext.Provider
      value={{ date: exchangeRate?.date, rate: roundedRate }}
    >
      {children}
    </ExchangeRateContext.Provider>
  )
}
