type PageProps = {
  children: React.ReactNode
}
export const Page = ({ children }: PageProps) => {
  return <div className='px-4'>{children}</div>
}
