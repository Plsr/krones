import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Coins } from 'lucide-react'

const rate = 0.13

export const ConversionRate = () => {
  return (
    <Card>
      <CardContent className='pt-6'>
        <div>1 DKK = {rate} €</div>
        <div className='text-sm'>Roughly {Math.ceil(1 / 0.13)} kr. are 1 €</div>
        <div className='text-xs dark:text-neutral-500 text-neutral-400 mt-2'>
          Last update: Static
        </div>
      </CardContent>
    </Card>
  )
}
