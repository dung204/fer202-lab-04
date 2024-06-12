import { Link } from '@tanstack/react-router';
import { ComponentProps } from 'react';
import { Card } from 'react-bootstrap';

import { News } from '@/api/NewsApi';

interface NewsCardProps extends ComponentProps<'div'> {
  news: News;
  showImage?: boolean;
}

export default function NewsCard({ news, showImage = true }: NewsCardProps) {
  return (
    <Card className="shadow-lg">
      {showImage && news.imageUrl && <Card.Img variant="top" src={news.imageUrl} />}
      <Card.Body>
        <Card.Title>
          <Link to="/auth/login">{news.title}</Link>
        </Card.Title>
        <Card.Text>{news.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
