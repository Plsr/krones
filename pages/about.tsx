import { FeatureRequestButton } from '@/components/FeatureRequestButton'
import { Screen } from '@/components/Screen'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Github, TentTree, Twitter } from 'lucide-react'

const About = () => {
  return (
    <Screen>
      <div className='h-full flex flex-col'>
        <h1 className='text-lg font-bold mb-4'>About</h1>
        <p className='leading-7 mb-4'>
          Kroner ("crowns" in Danish) is a small currency calculation app. I
          converts Danish Crowns (DKK) to Euro (EUR).
        </p>
        <p className='leading-7 mb-4'>
          I built is as a learning project to learn more about PWAs. Since I'll
          soon be moving to Denmark, this felt like a good candidate.
        </p>
        <p className='leading-7 mb-4'>
          It is 100% inspired by{' '}
          <a
            className='underline text-blue-500'
            href='https://www.producthunt.com/products/yenny'
          >
            Yenny
          </a>
          .
        </p>
        <div className='grid grid-cols-2 my-6 gap-4'>
          <FeatureRequestButton />
          <Button asChild variant='secondary'>
            <a href='https://kroner.features.vote/board'>Roadmap</a>
          </Button>
        </div>
        <div className='mt-auto pb-8'>
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

export default About
