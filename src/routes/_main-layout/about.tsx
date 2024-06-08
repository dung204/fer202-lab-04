import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
