import styled from 'styled-components';

const PlaylistsPageStyle = styled.div`
  .genre-item,
  .artist-item {
    cursor: pointer;
    overflow: hidden;

    & h5 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      background: unset;
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: unset;
      user-select: none;
    }

    &:hover img {
      scale: 1.2;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: all 0.3s;
  }

  .black-filter {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
  }
`;

export default PlaylistsPageStyle;
