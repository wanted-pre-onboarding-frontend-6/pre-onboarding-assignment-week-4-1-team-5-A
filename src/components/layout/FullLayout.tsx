import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LayoutFooter from './footer/Footer';
import LayoutHeader from './header/Header';
import LayoutSidebar from './sidbar/Sdiebar';

const FullLayout = () => {
  return (
    <FullLayoutWrapper>
      <LayoutSidebar />
      <FullLayoutContainer>
        <LayoutHeader />
        <Outlet />
        <LayoutFooter />
      </FullLayoutContainer>
    </FullLayoutWrapper>
  );
};
export default FullLayout;

const FullLayoutWrapper = styled.div`
  display: flex;
  background-color: red;
  height: 100vh;
`;

const FullLayoutContainer = styled.div`
  width: calc(100% - 500px);
`;
