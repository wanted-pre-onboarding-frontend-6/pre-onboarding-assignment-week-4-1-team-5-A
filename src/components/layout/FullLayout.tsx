import { Outlet } from 'react-router-dom';
import LayoutFooter from './footer/Footer';
import LayoutHeader from './header/Header';
import LayoutSidebar from './sidebar/Sidebar';
import * as Styled from './Style';

const FullLayout = () => {
  return (
    <Styled.Wrapper>
      <LayoutSidebar />
      <Styled.Container>
        <LayoutHeader />
        <Outlet />
        <LayoutFooter />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default FullLayout;
