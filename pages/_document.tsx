import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/png' href='/images/favicon.png' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
        />
        <meta
          name='theme-color'
          content='#18181b'
          media='(prefers-color-scheme: dark)'
        />
        <meta name='theme-color' content='#f4f4f5' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        ></meta>
        <link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <style>
        {`
          html {
            height: calc(100% + env(safe-area-inset-top));
          }
        `}
      </style>
      <body className='p-safe dark:bg-neutral-950'>
        <div className=' md:max-w-screen-lg mx-auto'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
