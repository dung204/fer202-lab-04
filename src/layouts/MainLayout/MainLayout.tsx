import { Outlet } from '@tanstack/react-router';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
