import LayoutFooter from 'components/Layout/footer/Footer';
import LayoutHeader from 'components/Layout/header/Header';
import LayoutSidebar from 'components/Layout/sidebar/Sidebar';
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
