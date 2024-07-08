import { ConversionRate } from '@/components/ConversionRate'
import { CurrencyConverter } from '@/components/CurrencyConverter'
import { CurrencyInput } from '@/components/CurrencyInput'
import { PricingTable } from '@/components/PricesTable'
import { Screen } from '@/components/Screen'

const Index = () => {
  return (
    <Screen>
      <div className='flex flex-col gap-6'>
        <CurrencyConverter />
        <ConversionRate />
        <PricingTable />
      </div>
    </Screen>
  )
}

export default Index
