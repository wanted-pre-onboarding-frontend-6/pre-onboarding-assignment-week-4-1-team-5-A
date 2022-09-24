import styled from 'styled-components';
import UserDetail from './components/UserDetail';

function UserInfoPage() {
  return (
    <Container>
      <UserDetail />
    </Container>
  );
}

export default UserInfoPage;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  height: 80%;
`;
