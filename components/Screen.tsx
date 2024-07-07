type ScreenProps = {
  children: React.ReactNode
}

export const Screen = ({ children }: ScreenProps) => {
  return (
    <div className='px-4 h-full'>
      {children}
      <style global jsx>{`
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}
