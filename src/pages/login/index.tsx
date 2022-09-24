import * as Styled from './Style';
import LoginForm from './components/Form/Form';
import LoginHeader from './components/Header/Header';

const LoginPage = () => {
  return (
    <Styled.Wrapper>
      <LoginHeader />
      <LoginForm />
    </Styled.Wrapper>
  );
};
export default LoginPage;
