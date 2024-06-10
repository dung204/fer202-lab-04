import { Link } from '@tanstack/react-router';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { BsFacebook, BsGoogle, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import LoginPageStyle from '@/pages/LoginPage/LoginPage.style';

export default function LoginPage() {
  return (
    <LoginPageStyle>
      <Row className="gy-2 mt-4">
        <Col xs={12}>
          <h2 className="text-center">Login</h2>
        </Col>
        <Col xs={12}>
          <Row as={Form} className="gy-4">
            <Col xs={12} as={Form.Group} controlId="email">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text as="label" htmlFor="email">
                  <MdEmail />
                </InputGroup.Text>
                <Form.Control type="email" placeholder="name@example.com" />
              </InputGroup>
            </Col>
            <Col xs={12} as={Form.Group} controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text as="label" htmlFor="password">
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control type="password" />
              </InputGroup>
            </Col>
            <Col xs={12} as={Form.Group} controlId="remember-me">
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col xs={12}>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Col>
            <Col xs={12}>
              <div className="separator">
                <div className="text-secondary">or login with</div>
              </div>
            </Col>
            <Col xs={12}>
              <Button
                variant="danger"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsGoogle className="me-2" /> Login with Google
              </Button>
            </Col>
            <Col xs={12}>
              <Button
                variant="primary"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsFacebook className="me-2" /> Login with Facebook
              </Button>
            </Col>
            <Col xs={12}>
              <Button
                variant="dark"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsTwitterX className="me-2" /> Login with X
              </Button>
            </Col>
            <Col xs={12} className="text-center">
              <p className="text-secondary">
                Don't have an account? <Link to="/auth/register">Register</Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </LoginPageStyle>
  );
}
