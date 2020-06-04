import styled from '@emotion/styled';
import Particles from 'react-particles-js';

export const AppContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export const AppParticles = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
