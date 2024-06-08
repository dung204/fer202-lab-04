import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/news')({
  component: NewsPage,
});

function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
    </div>
  );
}
