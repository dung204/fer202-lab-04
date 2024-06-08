import { createFileRoute } from '@tanstack/react-router';

import LoginPage from '@/pages/LoginPage';

export const Route = createFileRoute('/auth/_auth-layout/login')({
  component: LoginPage,
});
