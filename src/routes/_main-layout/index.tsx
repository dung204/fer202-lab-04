import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}
