import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import newsApi, { News } from '@/api/NewsApi';
import NewsCard from '@/components/NewsCard';
import NewsPageStyle from '@/pages/NewsPage/NewsPage.style';

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    newsApi.getAll().then(setNews);
  }, []);

  return (
    news.length !== 0 && (
      <NewsPageStyle>
        <Row className="justify-content-center my-5">
          <Col xs={6}>
            <Row>
              <Col xs={12} className="text-center">
                <h2>News</h2>
                <p>
                  Stay up-to-date with the latest news in the world of Electronic Dance Music. From
                  new releases to upcoming events, we've got you covered.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              {news.map((newsItem) => (
                <Col key={newsItem.id} xs={12} md={6} lg={4} className="mb-4">
                  <NewsCard news={newsItem} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </NewsPageStyle>
    )
  );
}
