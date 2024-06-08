import { createFileRoute } from '@tanstack/react-router';

import AboutPage from '@/pages/AboutPage';

export const Route = createFileRoute('/_main-layout/about')({
  component: AboutPage,
});
