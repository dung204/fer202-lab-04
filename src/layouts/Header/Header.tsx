import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { Nav } from 'react-bootstrap';

import HeaderStyle from '@/layouts/Header/Header.style';

export default function Header() {
  const [currentHeight, setCurrentHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const currentPathname = useLocation({
    select: (location) => location.pathname,
  });

  useEffect(() => {
    setCurrentHeight(ref.current?.clientHeight || 0);
  }, []);

  return (
    <HeaderStyle ref={ref} currentHeight={currentHeight} currentPathname={currentPathname}>
      <header className="row justify-content-center">
        <Nav className="col-6 justify-content-between p-4">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/playlists">Playlists</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/news">News</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contact</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/auth/login">Login</Link>
          </Nav.Item>
        </Nav>
      </header>
    </HeaderStyle>
  );
}
