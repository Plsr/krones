import { ConversionRate } from '@/components/ConversionRate'
import { CurrencyConverter } from '@/components/CurrencyConverter'

const Index = () => (
  <div className='flex flex-col gap-6'>
    <CurrencyConverter />
    <ConversionRate />
  </div>
)

export default Index
