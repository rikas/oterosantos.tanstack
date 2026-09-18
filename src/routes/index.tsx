import { createFileRoute } from '@tanstack/react-router'
import { Article, ExternalLink, StyledLink, Title } from '@/components/atoms'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home(): React.ReactElement {
  const workingTime = new Date().getFullYear() - 2007

  return (
    <main className="p-10">
      <Article>
        <Title>Ricardo Otero</Title>
        <p>
          My name is Ricardo Otero, I grew up in{' '}
          <ExternalLink href="https://maps.app.goo.gl/YVJr8U6HhjAXGv8x6">
            Coimbra
          </ExternalLink>
          , a student's city in Portugal. I've worked in software engineering
          for more than {workingTime} years. I like{' '}
          <ExternalLink href="https://www.ruby-lang.org/en/">Ruby</ExternalLink>
          ,{' '}
          <ExternalLink href="https://www.typescriptlang.org/">
            Typescript
          </ExternalLink>{' '}
          and game development in{' '}
          <ExternalLink href="https://godotengine.org/">Godot</ExternalLink> and{' '}
          <ExternalLink href="https://www.raylib.com/">Raylib</ExternalLink>.
        </p>

        <p>
          Read more <StyledLink href="/about">about me</StyledLink> or explore{' '}
          <StyledLink href="/projects">my projects</StyledLink>.
        </p>
      </Article>
    </main>
  )
}
