import LayoutFooter from 'components/layout/footer/Footer';
import LayoutHeader from 'components/layout/header/Header';
import LayoutSidebar from 'components/layout/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

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
