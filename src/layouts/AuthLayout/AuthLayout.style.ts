import styled from 'styled-components';

const AuthLayoutStyle = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .login-bg-container {
    padding-inline: 0;
  }

  .black-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

export default AuthLayoutStyle;
