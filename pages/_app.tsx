import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      <Header />
      <Separator />
      <div className='h-4' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
