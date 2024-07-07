import { ExchangeRateContext } from '@/providers/ExchangeRateProvider'
import { Card, CardContent } from './ui/card'
import { useContext } from 'react'
import { format } from 'date-fns'

export const ConversionRate = () => {
  const { rate, date } = useContext(ExchangeRateContext)

  return (
    <Card>
      <CardContent className='pt-6'>
        <div>1 DKK = {rate} €</div>
        <div className='text-sm'>Roughly {Math.ceil(1 / rate)} kr. are 1 €</div>
        <div className='text-xs dark:text-neutral-500 text-neutral-400 mt-2'>
          Last update: {format(new Date(date), 'LLL do, yyyy')}
        </div>
      </CardContent>
    </Card>
  )
}
