import { useTheme } from 'next-themes'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export const FeatureRequestButton = () => {
  const [sessionKey, setSesstionKey] = useState(crypto.randomUUID())
  const theme = useTheme()

  useEffect(() => {
    setSesstionKey(crypto.randomUUID())
  }, [theme])

  return (
    <>
      <Button
        onClick={() => {
          // @ts-ignore
          window.openFeatureRequestPopup()
        }}
      >
        Suggest a feature
      </Button>
      <Script
        key={sessionKey}
        src={`https://features.vote/widget/widget.js?sessionKey=${sessionKey}`}
        // @ts-ignore
        color_mode={theme.theme}
        user_id='<Optional>'
        user_email='<Optional>'
        user_name='<Optional>'
        img_url='<Optional>'
        user_spend={0}
        slug='kroner'
      />
    </>
  )
}
