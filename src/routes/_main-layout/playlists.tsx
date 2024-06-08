import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/playlists')({
  component: PlaylistPage,
});

function PlaylistPage() {
  return (
    <div>
      <h1>Playlists Page</h1>
    </div>
  );
}
