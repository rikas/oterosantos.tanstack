import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownToLine } from 'lucide-react'
import { twJoin } from 'tailwind-merge'
import { Article, ExternalLink, Stack, Title } from '@/components/atoms'

export const Route = createFileRoute('/_sidebar_layout/about')({
  head: () => ({
    meta: [{ title: 'Ricardo Otero - About me' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const workingTime = new Date().getFullYear() - 2007

  return (
    <Article>
      <Title>About me</Title>

      <div className="relative">
        <img
          src="/ricardo.jpg"
          alt="Ricardo Otero"
          className="w-full rounded-xl object-cover"
        />

        <div className="flex grow items-center justify-center absolute bottom-3 right-3">
          <ExternalLink
            href="/cv.pdf"
            title="Download Curriculum Vitae"
            className={twJoin(
              'text-sm',
              'no-underline rounded-lg bg-zinc-100 py-2 px-4 shadow-md',
              'hover:bg-white',
              'dark:bg-dark-700 dark:hover:bg-dark-800',
            )}
          >
            <Stack direction="row" gap={2} className="items-center">
              Download my CV <ArrowDownToLine className="size-5" />
            </Stack>
          </ExternalLink>
        </div>
      </div>

      <p>
        Hi, I'm Ricardo Otero — a software engineer based in Porto, Portugal
        working on the web industry for{' '}
        <strong>over {workingTime} years</strong>.
      </p>

      <p>
        I have a masters degree in Computer Science but I&apos;ve been into web
        development way before that. I taught myself Perl then PHP and ended up
        falling in love with Ruby.
      </p>

      <p>
        I work mainly with Ruby and Ruby on Rails, but I always try to learn new
        things, so I've been more into the inevitable world of Javascript (and
        Typescript which I learned to love as well). I do a lot of things in{' '}
        <ExternalLink href="https://reactjs.org/">React</ExternalLink> and{' '}
        <ExternalLink href="https://vuejs.org/">Vuejs</ExternalLink>.
      </p>

      <p>
        I&apos;ve worked in different companies over the years and I always
        gravitate towards the startup scene. After co-founding and being the CTO
        of my own startup for 3 years I now work as a{' '}
        <strong>freelance web developer</strong> working remote first.
      </p>

      <p>
        I also teached at{' '}
        <ExternalLink href="https://www.lewagon.com/lisbon">
          Le Wagon
        </ExternalLink>
        , a code bootcamp, in Lisbon, for over 6 years. Helping people to
        completely change their careers while teaching things that I love is
        just perfect!
      </p>

      <p>Thanks for stopping by!</p>
    </Article>
  )
}
