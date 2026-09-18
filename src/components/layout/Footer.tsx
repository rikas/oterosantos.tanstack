import { Stack } from '../atoms';
import { Socialbar } from './Socialbar';

export function Footer(): React.ReactElement {
  return (
    <Stack
      direction="row"
      render={<footer />}
      className="max-w-5xl pb-5 mx-auto pl-10 py-2 justify-between items-center"
    >
      <small className="text-zinc-400">&copy; 2026 Ricardo Otero</small>

      <Stack className="min-w-40">
        <Socialbar />
      </Stack>
    </Stack>
  );
}
