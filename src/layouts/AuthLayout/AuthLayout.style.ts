import styled from 'styled-components';

const AuthLayoutStyle = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .auth-container > * {
    height: 100vh;
  }

  .auth-bg-container {
    padding-inline: 0;
    position: fixed;
    top: 0;
  }

  .auth-form-container {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .black-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }

  p.text-secondary {
    font-size: var(--font-size-sm);
  }

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

export default AuthLayoutStyle;
