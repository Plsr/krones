import { ConversionRate } from '@/components/ConversionRate'
import { CurrencyConverter } from '@/components/CurrencyConverter'
import { PricingTable } from '@/components/PricesTable'
import { Screen } from '@/components/Screen'

const Index = () => {
  return (
    <Screen>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <CurrencyConverter />
        <ConversionRate />
        <PricingTable />
      </div>
    </Screen>
  )
}

export default Index
