import { absoluteCenter } from 'libs/styles/common';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LoginFormInputContainer>
        <span>아이디</span>
        <input type="text" placeholder="아이디를 입력하세요" />
      </LoginFormInputContainer>
      <LoginFormInputContainer>
        <span>비밀번호</span>
        <input type="passowrd" placeholder="비밀번호를 입력하세요" />
      </LoginFormInputContainer>
      <button>LOGIN</button>
    </LoginFormWrapper>
  );
};
export default LoginForm;

const LoginFormWrapper = styled.div`
  ${absoluteCenter};
  width: 500px;
  padding: 64px 32px;
  background-color: #fff;
  & > button {
    width: 100%;
    height: 64px;
    font-size: 22px;
    background-color: #091e3b;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const LoginFormInputContainer = styled.div`
  margin: 0 auto;
  position: relative;
  margin-bottom: 24px;

  & > span {
    position: absolute;
    padding: 2px 8px;
    background-color: #fff;
    margin-left: 32px;
    top: -6px;
  }
  & > input {
    width: 100%;
    height: 80px;
    border: 1px solid #999;
    border-radius: 16px;
    text-align: center;
  }
`;
