import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth-layout')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <h1>Auth Layout</h1>
      <Outlet />
    </>
  );
}
