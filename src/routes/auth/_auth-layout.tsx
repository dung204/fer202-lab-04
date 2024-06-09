import { createFileRoute } from '@tanstack/react-router';

import AuthLayout from '@/layouts/AuthLayout';

export const Route = createFileRoute('/auth/_auth-layout')({
  component: AuthLayout,
});
