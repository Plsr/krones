import React from 'react'
import { Input, InputProps } from './ui/input'

type CurrencyInputProps = InputProps & { currency: string }

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(({ currency, ...inputProps }, ref) => {
  return (
    <div className='relative'>
      <Input {...inputProps} ref={ref} className='pr-9' />
      <div className='opacity-60 absolute right-3 top-[6px]'>{currency}</div>
    </div>
  )
})

CurrencyInput.displayName = 'CurencyInput'
