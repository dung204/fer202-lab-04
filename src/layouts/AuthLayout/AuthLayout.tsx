import { Outlet } from '@tanstack/react-router';
import { Col, Row } from 'react-bootstrap';

import AuthLayoutStyle from '@/layouts/AuthLayout/AuthLayout.style';

export default function AuthLayout() {
  return (
    <AuthLayoutStyle>
      <Row>
        <Col xs={8} className="login-bg-container position-relative">
          <img src="/images/auth-bg.jpg" />
          <div className="black-filter"></div>
        </Col>
        <Col xs={4}>
          <Outlet />
        </Col>
      </Row>
    </AuthLayoutStyle>
  );
}
