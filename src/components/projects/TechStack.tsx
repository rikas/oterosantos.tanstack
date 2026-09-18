import { ExternalLink, Stack } from '../atoms';

export type Tech =
  'React' | 'Vite' | 'TailwindCSS' | 'Rails' | 'Postgres' | 'Material UI' | 'Prisma' | 'Tanstack';

const TechLinks: Record<Tech, string> = {
  React: 'https://reactjs.org/',
  Vite: 'https://vitejs.dev/',
  TailwindCSS: 'https://tailwindcss.com/',
  Rails: 'https://rubyonrails.org/',
  Postgres: 'https://www.postgresql.org/',
  'Material UI': 'https://mui.com/',
  Prisma: 'https://www.prisma.io/',
  Tanstack: 'https://tanstack.com/',
};

type Props = {
  techs: Tech[];
};

export function TechStack({ techs }: Props): React.ReactElement {
  return (
    <Stack direction="row" gap={2} className="items-center">
      Tech stack:
      <Stack direction="row" gap={1}>
        {techs.map((tech) => (
          <ExternalLink
            key={tech}
            className="no-underline text-xs transition-background duration-200 bg-blue-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-900 py-0.5 px-2 rounded-full"
            href={TechLinks[tech]}
          >
            {tech}
          </ExternalLink>
        ))}
      </Stack>
    </Stack>
  );
}
