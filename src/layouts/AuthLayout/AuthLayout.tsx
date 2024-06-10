import { Link, Outlet } from '@tanstack/react-router';
import { Col, Row } from 'react-bootstrap';

import AuthLayoutStyle from '@/layouts/AuthLayout/AuthLayout.style';

export default function AuthLayout() {
  return (
    <AuthLayoutStyle>
      <Row className="auth-container">
        <Col xs={8} className="auth-bg-container position-relative">
          <img src="/images/auth-bg.jpg" />
          <div className="black-filter"></div>
        </Col>
        <Col xs={4} className="auth-form-container position-relative py-4">
          <Link to="/" className="ms-3">
            Back to home
          </Link>
          <Outlet />
        </Col>
      </Row>
    </AuthLayoutStyle>
  );
}
