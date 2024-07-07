import { ChangeEvent, useContext, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ExchangeRateContext } from '@/providers/ExchangeRateProvider'

export const CurrencyConverter = () => {
  const [result, setResult] = useState<undefined | string>(undefined)
  const dkkInputRef = useRef<HTMLInputElement | null>(null)

  const { rate } = useContext(ExchangeRateContext)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)

    if (!value) {
      return
    }

    setResult((value * rate).toFixed(2))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Convert DKK 🇩🇰</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 gap-4'>
            <Input
              type='number'
              inputMode='numeric'
              placeholder='DKK'
              ref={dkkInputRef}
              onChange={handleInputChange}
            />
            <Button variant='secondary' disabled>
              {result} €
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
