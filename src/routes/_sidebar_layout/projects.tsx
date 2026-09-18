import { createFileRoute } from '@tanstack/react-router';
import type { Tech } from '@/components/projects';
import { GithubLink, TechStack, WebsiteLink } from '@/components/projects';
import { Article, Stack, Title } from '@/components/atoms';
import projectsData from '@/data/projects.json';

export const Route = createFileRoute('/_sidebar_layout/projects')({
  head: () => ({
    meta: [{ title: 'Ricardo Otero - Projects' }],
  }),
  component: RouteComponent,
});

type Project = {
  title: string;
  website: string | null;
  githubRepo: string | null;
  description: string | null;
  image: { src: string; alt: string } | null;
  techStack: Array<Tech>;
};

const projects = projectsData as Array<Project>;

function RouteComponent(): React.ReactElement {
  return (
    <Article>
      <Title>My projects</Title>
      <p>
        Most of the time I work on private projects for a variety of products, but every once in a
        while I find the time and motivation to work on side projects or open source, mostly on
        GitHub.
      </p>

      {projects.map((project) => (
        <section key={project.title}>
          <h2>{project.title}</h2>

          {(project.website || project.githubRepo) && (
            <Stack direction="row" gap={4}>
              {project.website && <WebsiteLink href={project.website} />}
              {project.githubRepo && <GithubLink repo={project.githubRepo} />}
            </Stack>
          )}

          {project.description && <p>{project.description}</p>}

          {project.image && (
            <figure className="w-full">
              <img
                src={project.image.src}
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                alt={project.image.alt}
              />
            </figure>
          )}

          {project.techStack.length > 0 && (
            <figcaption>
              <TechStack techs={project.techStack} />
            </figcaption>
          )}
        </section>
      ))}
    </Article>
  );
}
