import { Outlet, createFileRoute } from '@tanstack/react-router';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export const Route = createFileRoute('/_main-layout')({
  component: MainLayout,
});

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
