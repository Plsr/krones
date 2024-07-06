type ScreenProps = {
  children: React.ReactNode
}

export const Screen = ({ children }: ScreenProps) => {
  return <div className='px-4'>{children}</div>
}
