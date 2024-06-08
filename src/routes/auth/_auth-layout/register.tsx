import { createFileRoute } from '@tanstack/react-router';

import RegisterPage from '@/pages/RegisterPage';

export const Route = createFileRoute('/auth/_auth-layout/register')({
  component: RegisterPage,
});
