import { Crown, Settings2 } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const href = router.asPath === '/settings' ? '/' : '/settings'
  const active = router.asPath === '/settings' ? true : false

  return (
    <div className='flex justify-between p-4'>
      <div className='flex felx-col items-center gap-4'>
        <Crown className='h-4 w-4' />
        Kroner
      </div>
      <div>
        <Button variant={active ? 'secondary' : 'outline'} size='icon'>
          <Link href={href}>
            <Settings2 className='h-[1.2rem] w-[1.2rem]' />
          </Link>
        </Button>
      </div>
    </div>
  )
}
