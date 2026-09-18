import { createFileRoute } from '@tanstack/react-router';
import { ArrowDownToLine } from 'lucide-react';
import { twJoin } from 'tailwind-merge';
import { Article, ExternalLink, Stack, Title } from '@/components/atoms';

export const Route = createFileRoute('/_sidebar_layout/about')({
  head: () => ({
    meta: [{ title: 'Ricardo Otero - About me' }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const workingTime = new Date().getFullYear() - 2007;

  return (
    <Article>
      <Title>About me</Title>

      <div className="relative">
        <img src="/ricardo.jpg" alt="Ricardo Otero" className="w-full rounded-xl object-cover" />

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
        Hi, I'm Ricardo Otero — a software engineer based in Porto, Portugal, who's been working in
        the web industry for <strong>over {workingTime} years</strong>.
      </p>

      <p>
        I have a master&apos;s degree in Computer Science, but I was into web development long
        before that. I taught myself Perl, then PHP, and eventually fell in love with Ruby.
      </p>

      <p>
        I work mainly with Ruby and Ruby on Rails, but I like to keep learning, so I&apos;ve dived
        into the ever-growing JavaScript world too (and ended up loving TypeScript along the way).
        I&apos;ve done a fair amount of work with{' '}
        <ExternalLink href="https://reactjs.org/">React</ExternalLink> and{' '}
        <ExternalLink href="https://vuejs.org/">Vue.js</ExternalLink>.
      </p>

      <p>
        I&apos;ve worked at several companies over the years, and I always gravitate toward the
        startup scene. After co-founding and serving as CTO of my own startup for three years, I now
        work as a <strong>freelance web developer</strong>, remote-first.
      </p>

      <p>
        I also taught at <ExternalLink href="https://www.lewagon.com/lisbon">Le Wagon</ExternalLink>
        , a coding bootcamp in Lisbon, for over 6 years. Helping people completely change their
        careers while teaching what I love is incredibly rewarding.
      </p>

      <p>Thanks for stopping by!</p>
    </Article>
  );
}
