import { FeatureRequestButton } from '@/components/FeatureRequestButton'
import { Screen } from '@/components/Screen'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MoonIcon, SunIcon, Twitter } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Settings() {
  const { theme: resolvedTheme, setTheme } = useTheme()
  return (
    <Screen>
      <div className='h-full flex flex-col'>
        <h1 className='text-lg font-bold mb-4'>Settings</h1>
        <h2 className='font-bold mb-2'>Theme</h2>
        <div className='grid grid-cols-2 gap-4 mb-12'>
          <Button
            variant={resolvedTheme === 'light' ? 'default' : 'outline'}
            onClick={() => setTheme('light')}
          >
            <SunIcon className='h-[1.2rem] w-[1.2rem] mr-2' />
            Light
          </Button>
          <Button
            variant={resolvedTheme === 'dark' ? 'default' : 'outline'}
            onClick={() => setTheme('dark')}
          >
            <MoonIcon className='h-[1.2rem] w-[1.2rem] mr-2' />
            Dark
          </Button>
        </div>

        <h1 className='text-lg font-bold mb-4'>About</h1>
        <p className='leading-7 mb-4'>
          A learning project 100% inspired by{' '}
          <a
            className='underline text-blue-500'
            href='https://www.producthunt.com/products/yenny'
          >
            Yenny
          </a>
          .
        </p>
        <div className='grid grid-cols-2 mb-6 gap-4'>
          <FeatureRequestButton />
          <Button asChild variant='secondary'>
            <a href='https://kroner.features.vote/board'>Roadmap</a>
          </Button>
        </div>
        <div className='pb-8'>
          <Card className='pt-6'>
            <CardContent className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <Avatar>
                  <AvatarImage src='https://github.com/plsr.png' />
                </Avatar>
                <div className='flex flex-col'>
                  <div className='text-sm font-bold'>Chris Jarling</div>
                  <div className='text-sm opacity-60'>Full Stack Engineer</div>
                </div>
              </div>
              <SocialButton
                link='https://x.com/chrisjarling'
                renderIcon={() => <Twitter className='h-4 w-4' />}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Screen>
  )
}

type SocialButtonProps = {
  link: string
  renderIcon: () => JSX.Element
}

const SocialButton = ({ link, renderIcon }: SocialButtonProps) => {
  return (
    <Button asChild variant='outline' className='text-sm font-normal '>
      <a href={link}>{renderIcon()}</a>
    </Button>
  )
}
