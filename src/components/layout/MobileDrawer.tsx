import { Button } from '@base-ui/react';
import { Drawer } from '@base-ui/react/drawer';
import { Menu } from 'lucide-react';
import { Stack } from '../atoms';
import { GithubInfo } from './GithubInfo';
import type { GithubRepo, GithubUser } from '@/lib/github';

type Props = {
  user: GithubUser;
  repos: Array<GithubRepo>;
};

export function MobileDrawer({ user, repos }: Props): React.ReactElement {
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger
        render={
          <Button
            title="Open sidebar"
            className="cursor-pointer group rounded-full bg-zinc-100 dark:bg-dark-700 hover:bg-sky-300 dark:hover:bg-dark-900 p-2 absolute top-10 right-10"
          >
            <Menu className="size-6 text-sky-400 group-hover:text-white group-hover:dark:text-sky-600" />
          </Button>
        }
      />
      <Drawer.Portal>
        <Drawer.Backdrop className="[--backdrop-opacity:0.2] [--bleed:3rem] dark:[--backdrop-opacity:0.7] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute" />
        <Drawer.Viewport className="[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] fixed inset-0 flex items-stretch justify-end p-(--viewport-padding)">
          <Drawer.Popup className="[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-92 max-w-[calc(100vw-3rem+3rem)] -mr-12 border-l border-zinc-200 bg-blue-100 p-6 pr-18 text-neutral-950 outline-none shadow-[0.25rem_0.25rem_0] shadow-black/12 overflow-y-auto overscroll-contain touch-auto transform-[translateX(var(--drawer-swipe-movement-x))] transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-3rem)] supports-[-webkit-touch-callout:none]:border supports-[-webkit-touch-callout:none]:pr-6 dark:border-zinc-900 dark:bg-dark-700 dark:text-white dark:shadow-none">
            <Drawer.Content className="mx-auto w-full max-w-lg relative">
              <Stack gap={10} id="github-information">
                <GithubInfo user={user} repos={repos} />
              </Stack>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
