import styled from 'styled-components';

interface HeaderStyleProps {
  currentHeight: number;
  currentPathname: string;
}

const HeaderStyle = styled.div<HeaderStyleProps>`
  & {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    background-color: ${({ currentPathname }) =>
      currentPathname === '/' ? 'transparent' : 'white'};
    box-shadow: ${({ currentPathname }) =>
      currentPathname === '/' ? 'none' : `var(--bs-box-shadow-lg)`};

    transition: all 0.3s;
  }

  & + * {
    margin-top: ${({ currentHeight, currentPathname }) =>
      currentPathname === '/' ? 0 : currentHeight}px;
  }

  a {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: bold;
  }
`;

export default HeaderStyle;
