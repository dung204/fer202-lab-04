import styled from 'styled-components';

interface HeaderStyleProps {
  currentHeight: number;
}

const HeaderStyle = styled.div<HeaderStyleProps>`
  & {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
  }

  & + * {
    margin-top: ${({ currentHeight }) => currentHeight}px;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.15rem;

    background: -webkit-linear-gradient(left, #0099f7, #f11712);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-size: 300% 100%;
    background-position: 0;
    transition: all 0.3s;

    &:hover,
    &[data-status='active'] {
      background-position: 100%;
    }
  }
`;

export default HeaderStyle;
