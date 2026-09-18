import { Link } from 'lucide-react';
import { ExternalLink, Stack } from '../atoms';

type Props = {
  href: string;
};

export function WebsiteLink({ href }: Props): React.ReactElement {
  return (
    <Stack direction="row" gap={1} className="items-center">
      <Link strokeWidth={1.6} className="size-4" />
      <ExternalLink href={href}>{href}</ExternalLink>
    </Stack>
  );
}
