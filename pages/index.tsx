import { ConversionRate } from '@/components/ConversionRate'
import { CurrencyConverter } from '@/components/CurrencyConverter'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Screen } from '@/components/Screen'

const Index = () => {
  return (
    <Screen>
      <div className='flex flex-col gap-6'>
        <CurrencyConverter />
        <ConversionRate />
      </div>
    </Screen>
  )
}

export default Index
