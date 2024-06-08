import { createFileRoute } from '@tanstack/react-router';

import PlaylistsPage from '@/pages/PlaylistsPage';

export const Route = createFileRoute('/_main-layout/playlists')({
  component: PlaylistsPage,
});
