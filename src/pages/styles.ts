import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;

  grid-template-columns: 120px 240px auto;
  grid-template-areas:
    'SIDEBAR MENU MAIN';

  background: #FA0969;
`;
