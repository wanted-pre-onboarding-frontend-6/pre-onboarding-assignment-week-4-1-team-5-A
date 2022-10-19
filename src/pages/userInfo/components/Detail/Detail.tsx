import useGetUserDetail from 'queries/user/useGetUserDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Userinfo } from 'types/api/userApi.type';

const UserDetail = () => {
  const { userId } = useParams();
  const userDetailQuery = useGetUserDetail({ userId: parseInt(userId as string) });
  const [user, setUser] = useState<Userinfo>();

  useEffect(() => {
    if (!userDetailQuery.data) return;
    setUser(userDetailQuery.data.data);
  }, [userDetailQuery.data]);

  const userGenderHandler = (genderNum: number) => {
    if (genderNum === 1 || genderNum === 3) {
      return 'male';
    } else {
      return 'female';
    }
  };

  return (
    <Container>
      <div>
        <UserProfile>
          <div>
            <Img src={user?.photo} />
            <Name>{user?.name}</Name>
          </div>
          <Detail>
            <Section>
              <Category>EMAIL</Category>
              <Data>{user?.email}</Data>
            </Section>
            <Section>
              <Category>AGE</Category>
              <Details>{user?.age}</Details>
              <Category>GENDER</Category>
              <Details>{user?.gender_origin}</Details>
            </Section>
            <Section>
              <Category>PHONE</Category>
              <Data>{user?.phone_number}</Data>
            </Section>
            <Section>
              <Category>BIRTH</Category>
              <Data>{user?.birth_date}</Data>
            </Section>
          </Detail>
        </UserProfile>
        <UserAddress>
          <Addresses>
            <Address>ADDRESS</Address>
            <UserData>{user?.address}</UserData>
          </Addresses>
          <Addresses>
            <Address>DETAIL ADDRESS</Address>
            <UserData>{user?.detail_address}</UserData>
          </Addresses>
        </UserAddress>
      </div>
    </Container>
  );
};

export default UserDetail;

const Container = styled.div`
  background: ${({ theme }) => theme.palette.subColor};
  width: calc(100% - 100px);
  padding: 40px 0px;
  color: ${({ theme }) => theme.palette.mainColor};
`;

const Name = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Detail = styled.div`
  padding-left: 100px;
`;

const Category = styled.div`
  text-align: bottom;
  padding-top: 10px;
  padding-right: 80px;
  margin: 0 20px;
  width: 80px;
  font-size: 20px;
`;

const Data = styled.div`
  padding-bottom: 10px;
  border-bottom: solid;
  width: 600px;
`;

const Details = styled.div`
  padding-bottom: 10px;
  border-bottom: solid;
  width: 240px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 40px;
`;
const UserAddress = styled.div`
  text-align: center;
  font-weight: bold;
  padding-left: 100px;
`;

const UserData = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: solid;
  width: 600px;
`;

const Addresses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Address = styled.div`
  text-align: bottom;
  padding-top: 10px;
  padding-right: 20px;
  margin: 0 20px;
  width: 280px;
  font-size: 20px;
`;
