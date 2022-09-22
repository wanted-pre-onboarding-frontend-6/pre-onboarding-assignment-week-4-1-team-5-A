import * as Styled from './Style';
import logo from 'assets/imges/december.jpeg';

const SideHeader = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <img src={logo} />
        <span>December</span>
      </Styled.Container>
      <div>X</div>
    </Styled.Wrapper>
  );
};
export default SideHeader;
