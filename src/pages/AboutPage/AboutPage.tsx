import { Col, Row } from 'react-bootstrap';

import AboutPageStyle from '@/pages/AboutPage/AboutPage.style';

export default function AboutPage() {
  return (
    <AboutPageStyle>
      <Row className="justify-content-center my-5">
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <h2>About</h2>
              <p>
                Founded in 2024, Rave Haven is a website that provides you with the latest news,
                music, and merchandise of Electronic Dance Music. We are a group of people who are
                passionate about EDM and want to share our passion with the world. Our goal is to
                create a community of like-minded individuals who love EDM and want to connect with
                others who share the same interests.
              </p>
            </Col>
            <Col xs={6}>
              <img
                className="w-100 h-100 shadow-lg rounded-3"
                src="/images/about-section-img.jpg"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </AboutPageStyle>
  );
}
