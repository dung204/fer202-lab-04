import { Link, useNavigate } from '@tanstack/react-router';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { BsCake2Fill, BsFacebook, BsGoogle, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import RegisterPageStyle from '@/pages/RegisterPage/RegisterPage.style';
import { RegisterSchema, registerValidationSchema } from '@/utils/schemas/registerSchema';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, errors } = useFormik<RegisterSchema>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: 'male',
    },
    validationSchema: registerValidationSchema,
    onSubmit: () => navigate({ to: '/' }),
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <RegisterPageStyle>
      <Row className="gy-2 mt-4">
        <Col xs={12}>
          <h2 className="text-center">Register</h2>
        </Col>
        <Col xs={12}>
          <Form className="row gy-4" noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} xs={6} controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs={6} controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="email">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text as="label" htmlFor="email">
                  <MdEmail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="dateOfBirth">
              <Form.Label>Date of birth</Form.Label>
              <InputGroup>
                <InputGroup.Text as="label" htmlFor="dateOfBirth">
                  <BsCake2Fill />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                  isInvalid={!!errors.dateOfBirth}
                />
                <Form.Control.Feedback type="invalid">{errors.dateOfBirth}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} xs={12} className="gender-group">
              <Form.Label>Gender:</Form.Label>
              <Form.Check
                type="radio"
                inline
                name="gender"
                value="male"
                label="Male"
                id="male"
                checked={values.gender === 'male'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                inline
                name="gender"
                value="female"
                label="Female"
                id="female"
                checked={values.gender === 'female'}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text as="label" htmlFor="password">
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Col xs={12}>
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Col>
            <Col xs={12}>
              <div className="separator">
                <div className="text-secondary">or register with</div>
              </div>
            </Col>
            <Col xs={12}>
              <Button
                variant="danger"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsGoogle className="me-2" /> Register with Google
              </Button>
            </Col>
            <Col xs={12}>
              <Button
                variant="primary"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsFacebook className="me-2" /> Register with Facebook
              </Button>
            </Col>
            <Col xs={12}>
              <Button
                variant="dark"
                type="button"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <BsTwitterX className="me-2" /> Register with X
              </Button>
            </Col>
            <Col xs={12} className="text-center">
              <p className="text-secondary">
                Already had an account? <Link to="/auth/login">Login</Link>
              </p>
            </Col>
          </Form>
        </Col>
      </Row>
    </RegisterPageStyle>
  );
}
