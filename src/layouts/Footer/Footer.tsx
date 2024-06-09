import { Col, Row } from 'react-bootstrap';

import FooterStyle from '@/layouts/Footer/Footer.style';

export default function Footer() {
  return (
    <FooterStyle>
      <footer className="w-100">
        <Row className="justify-content-center">
          <Col xs={6} className="text-center py-4">
            <p>&copy; 2024 Rave Haven. All right reserved.</p>
            <p>
              Made by{' '}
              <a target="_blank" href="https://github.com/dung204">
                Mantrilogix - dung204 - Ho Anh Dung
              </a>
            </p>
          </Col>
        </Row>
      </footer>
    </FooterStyle>
  );
}
