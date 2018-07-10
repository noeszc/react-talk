import styled from 'styled-components';

const Poster = styled.div`
  flex: 3;
  background-image: ${({ hero }) => `url(${hero})`};
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.5) 0%,
      rgba(20, 20, 20, 1) 100%
    );
    background-blend-mode: multiply;
  }
`;

export default Poster;
