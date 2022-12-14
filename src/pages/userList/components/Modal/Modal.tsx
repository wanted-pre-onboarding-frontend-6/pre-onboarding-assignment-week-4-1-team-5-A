import { UserService } from 'apis';
import ApiError from 'apis/error';
import Button from 'components/Button/Button';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import { BlackBackGround } from 'libs/styles/common';
import { Dispatch, SetStateAction } from 'react';
import { Userinfo } from 'types/api/userApi.type';
import * as Styled from './Style';

type AddForm = {
  username: string;
  email: string;
  password: string;
  gender: number;
  phone: string;
  uuid: string;
  age: number;
  birth: string;
  address: string;
  detailaddress: string;
  flag: number;
  staff: number;
  active: number;
  createdAt: string;
  lastlogin: string;
};

type UserAddModalProps = {
  onCloseAddUserModal: () => void;
  userList: Userinfo[];
  setUserList: Dispatch<SetStateAction<Userinfo[]>>;
};

const UserAddModal = ({ onCloseAddUserModal, userList, setUserList }: UserAddModalProps) => {
  const [
    {
      username,
      email,
      password,
      gender,
      phone,
      uuid,
      age,
      birth,
      address,
      detailaddress,
      flag,
      staff,
      active,
      createdAt,
      lastlogin,
    },
    onChangeForm,
  ] = useInputs<AddForm>({
    username: '',
    email: '',
    password: '',
    gender: 1,
    phone: '',
    uuid: '',
    age: 0,
    birth: '',
    address: '',
    detailaddress: '',
    flag: 1,
    staff: 0,
    active: 0,
    createdAt: dayjs().format(),
    lastlogin: dayjs().format(),
  });

  // parsing boolean
  const onBooleanParse = (number: number) => {
    if (number === 1) return true;
    return false;
  };

  // on add handler
  const onAddUserHandler = async () => {
    const settingData = {
      uuid,
      allow_marketing_push: onBooleanParse(flag),
      allow_invest_push: onBooleanParse(flag),
      is_active: onBooleanParse(active),
      is_staff: onBooleanParse(staff),
      createdAt,
    };

    const userData = {
      name: username,
      email,
      password,
      age,
      photo:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/314.jpg',
      gender_origin: gender,
      uuid,
      birth_date: birth,
      phone_number: phone,
      address,
      detail_address: detailaddress,
      last_login: lastlogin,
      createdAt: createdAt,
    };

    await UserService.addUser({ data: userData })
      .then(async (res) => {
        const user = res.data.user;
        await UserService.addUserSetting({ data: settingData }).then(async (res) => {
          const userStting = res.data;
          user.userinfo = userStting;
          user.account = 0;
          setUserList([user, ...userList]);
          onCloseAddUserModal();
        });
      })
      .catch((err) => {
        throw new ApiError(err.response.message, err.response.status);
      });
  };

  return (
    <BlackBackGround>
      <Styled.Wrapper>
        <Styled.Header>
          <p>????????? ?????? ??????</p>
          <span onClick={onCloseAddUserModal}>X</span>
        </Styled.Header>
        <Styled.Container>
          <Styled.Input placeholder="??????" name="username" onChange={onChangeForm} />
          <Styled.Input placeholder="????????? ??????" name="email" onChange={onChangeForm} />
          <Styled.Input
            placeholder="????????????"
            type="passowrd"
            name="password"
            onChange={onChangeForm}
          />
          <Styled.Input placeholder="????????????" name="gender" onChange={onChangeForm} />
          <Styled.Input placeholder="????????? ??????" name="phone" onChange={onChangeForm} />
          <Styled.Input placeholder="UUID" name="uuid" onChange={onChangeForm} />
          <Styled.SmallInputBox>
            <input placeholder="??????" name="age" onChange={onChangeForm} />
            <input placeholder="????????????" name="birth" onChange={onChangeForm} />
          </Styled.SmallInputBox>
          <Styled.SmallInputBox>
            <input placeholder="??????" name="address" onChange={onChangeForm} />
            <input placeholder="????????????" name="detailaddress" onChange={onChangeForm} />
          </Styled.SmallInputBox>
          <Styled.SmallInputBox>
            <input
              placeholder="?????????"
              name="createdAt"
              value={createdAt}
              onChange={onChangeForm}
            />
            <input
              placeholder="?????? ?????????"
              name="lastlogin"
              value={lastlogin}
              onChange={onChangeForm}
            />
          </Styled.SmallInputBox>
          <Styled.SelectBox>
            <select name="flag" onChange={onChangeForm}>
              <option value={0}>????????????</option>
              <option value={1}>??????</option>
              <option value={0}>?????????</option>
            </select>
            <select name="staff" onChange={onChangeForm}>
              <option value={0}>???????????????</option>
              <option value={1}>?????????</option>
              <option value={0}>????????????</option>
            </select>
            <select name="active" onChange={onChangeForm}>
              <option value={0}>???????????????</option>
              <option value={1}>?????????</option>
              <option value={0}>????????????</option>
            </select>
          </Styled.SelectBox>
          <Button shape="default" size="full" variant="primary" onClick={onAddUserHandler}>
            ??????
          </Button>
        </Styled.Container>
      </Styled.Wrapper>
    </BlackBackGround>
  );
};
export default UserAddModal;
