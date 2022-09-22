import styled from 'styled-components';
import LoginHeader from './components/header/Header';
import LoginForm from './components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginHeader />
      <LoginForm />
    </LoginPageWrapper>
  );
};
export default LoginPage;

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
