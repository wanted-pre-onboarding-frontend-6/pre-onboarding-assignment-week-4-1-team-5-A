import * as Styled from './Style';
import LoginHeader from './components/header/Header';
import LoginForm from './components/Form/Form';

const LoginPage = () => {
  return (
    <Styled.Wrapper>
      <LoginHeader />
      <LoginForm />
    </Styled.Wrapper>
  );
};
export default LoginPage;
