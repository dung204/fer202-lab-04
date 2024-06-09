import { Carousel } from 'react-bootstrap';

import HomePageStyle from '@/pages/HomePage/HomePage.style';

export default function HomePage() {
  return (
    <HomePageStyle>
      <div className="black-filter"></div>
      <div className="page-title">
        <h1>Rave Haven</h1>
        <p className="mt-5">Your everything of Electronic Dance Music</p>
      </div>
      <Carousel controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel-1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel-2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel-3.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel-4.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel-5.jpg" />
        </Carousel.Item>
      </Carousel>
    </HomePageStyle>
  );
}
