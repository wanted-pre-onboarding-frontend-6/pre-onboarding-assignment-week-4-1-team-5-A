import styled from 'styled-components';
import logo from 'assets/imges/december.jpeg';
import { flexAlignCenter, flexAlignEnd } from 'libs/styles/common';

const LoginHeader = () => {
  return (
    <LoginHeaderWrapper>
      <LoginHeaderContainer>
        <img src={logo} />
        <span>December</span>
      </LoginHeaderContainer>
    </LoginHeaderWrapper>
  );
};
export default LoginHeader;

const LoginHeaderWrapper = styled.div`
  ${flexAlignCenter};
  width: 100%;
  height: 80px;
  background-color: #091e3b;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding-left: 48px;
`;

const LoginHeaderContainer = styled.div`
  ${flexAlignEnd}
  & > img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;
