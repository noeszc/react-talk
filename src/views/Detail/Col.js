import styled from 'styled-components';

const Col = styled.div`
  flex: 3;
  background-image: ${hero => `url(${hero})`};
`;

export default Col;
