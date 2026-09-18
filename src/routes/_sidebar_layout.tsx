import { Outlet, createFileRoute } from '@tanstack/react-router';
import { SidebarLayout } from '@/components/layout/SidebarLayout';

export const Route = createFileRoute('/_sidebar_layout')({
  loader: async () => {
    const { getGithubRepos, getGithubUser } = await import('@/lib/github');
    const [repos, user] = await Promise.all([getGithubRepos(), getGithubUser()]);
    return { repos, user };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { repos, user } = Route.useLoaderData();

  return (
    <SidebarLayout repos={repos} user={user}>
      <Outlet />
    </SidebarLayout>
  );
}
