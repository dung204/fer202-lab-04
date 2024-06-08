import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';

export const Route = createRootRoute({
  component: Root,
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((module) => ({
          default: module.TanStackRouterDevtools,
        })),
      );

function Root() {
  return (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
