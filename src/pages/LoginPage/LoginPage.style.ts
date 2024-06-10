import styled from 'styled-components';

const LoginPageStyle = styled.div`
  .separator {
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #5b5b5b;
    }

    &:not(:empty)::before {
      margin-right: 0.5rem;
    }

    &:not(:empty)::after {
      margin-left: 0.5rem;
    }
  }
`;

export default LoginPageStyle;
