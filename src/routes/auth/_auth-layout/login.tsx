import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth-layout/login')({
  component: Login,
});

function Login() {
  return <h1>Login page</h1>;
}
