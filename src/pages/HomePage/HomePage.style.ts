import styled from 'styled-components';

const HomePageStyle = styled.div`
  .carousel {
    height: 100vh;
  }

  .carousel-inner {
    max-height: 100vh;
  }

  .carousel-inner img {
    height: 100vh;
    object-fit: cover;
  }

  .black-filter {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 98;
  }

  .page-title {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      font-weight: 900;
      font-size: var(--font-size-4xl);
      background: -webkit-linear-gradient(left, #0099f7, #f11712);
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & p {
      color: white;
      font-size: var(--font-size-base);
    }
  }
`;

export default HomePageStyle;
