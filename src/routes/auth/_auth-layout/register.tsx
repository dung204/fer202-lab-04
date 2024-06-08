import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth-layout/register')({
  component: Register,
});

function Register() {
  return <h1>Register page</h1>;
}
