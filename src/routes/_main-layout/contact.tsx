import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/contact')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}
