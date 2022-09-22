import SideContent from './content/SideContent';
import SideHeader from './header/SideHeader';
import * as Styled from './Style';

const LayoutSidebar = () => {
  return (
    <Styled.Wrapper>
      <SideHeader />
      <SideContent />
    </Styled.Wrapper>
  );
};
export default LayoutSidebar;
