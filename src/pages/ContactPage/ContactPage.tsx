import { useFormik } from 'formik';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';

import { ContactSchema, contactValidationSchema } from '@/utils/schemas/contactSchema';

export default function ContactPage() {
  const { handleSubmit, handleChange, values, errors } = useFormik<ContactSchema>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: contactValidationSchema,
    onSubmit: () => {},
  });

  return (
    <Row className="justify-content-center my-5">
      <Col xs={6}>
        <Row>
          <Col xs={12} className="text-center">
            <h2>Contact</h2>
            <p>
              Have a question or feedback? Feel free to reach out to us. We'd love to hear from you!
            </p>
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
              <Form.Group as={Col} xs={12} controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your message here ..."
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  rows={10}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>

              <Col xs={12}>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
