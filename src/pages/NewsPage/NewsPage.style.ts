import styled from 'styled-components';

const NewsPageStyle = styled.div`
  .card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .card-text {
    font-size: var(--font-size-sm);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default NewsPageStyle;
