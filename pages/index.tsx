import { ConversionRate } from '@/components/ConversionRate'
import { CurrencyConverter } from '@/components/CurrencyConverter'
import { Page } from '@/components/Page'

const Index = () => (
  <Page>
    <div className='flex flex-col gap-6'>
      <CurrencyConverter />
      <ConversionRate />
    </div>
  </Page>
)

export default Index
