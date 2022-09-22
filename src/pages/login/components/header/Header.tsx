import logo from 'assets/imges/december.jpeg';
import * as Styled from './Style';

const LoginHeader = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <img src={logo} />
        <span>December</span>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default LoginHeader;
