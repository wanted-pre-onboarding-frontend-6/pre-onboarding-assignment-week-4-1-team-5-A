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
          <p>사용자 목록 추가</p>
          <span onClick={onCloseAddUserModal}>X</span>
        </Styled.Header>
        <Styled.Container>
          <Styled.Input placeholder="이름" name="username" onChange={onChangeForm} />
          <Styled.Input placeholder="이메일 주소" name="email" onChange={onChangeForm} />
          <Styled.Input
            placeholder="비밀번호"
            type="passowrd"
            name="password"
            onChange={onChangeForm}
          />
          <Styled.Input placeholder="성별코드" name="gender" onChange={onChangeForm} />
          <Styled.Input placeholder="휴대포 번호" name="phone" onChange={onChangeForm} />
          <Styled.Input placeholder="UUID" name="uuid" onChange={onChangeForm} />
          <Styled.SmallInputBox>
            <input placeholder="나이" name="age" onChange={onChangeForm} />
            <input placeholder="생년월일" name="birth" onChange={onChangeForm} />
          </Styled.SmallInputBox>
          <Styled.SmallInputBox>
            <input placeholder="주소" name="address" onChange={onChangeForm} />
            <input placeholder="상세주소" name="detailaddress" onChange={onChangeForm} />
          </Styled.SmallInputBox>
          <Styled.SmallInputBox>
            <input
              placeholder="가입일"
              name="createdAt"
              value={createdAt}
              onChange={onChangeForm}
            />
            <input
              placeholder="최근 로그인"
              name="lastlogin"
              value={lastlogin}
              onChange={onChangeForm}
            />
          </Styled.SmallInputBox>
          <Styled.SelectBox>
            <select name="flag" onChange={onChangeForm}>
              <option value={0}>수신동의</option>
              <option value={1}>동의</option>
              <option value={0}>비동의</option>
            </select>
            <select name="staff" onChange={onChangeForm}>
              <option value={0}>임직원여부</option>
              <option value={1}>임직원</option>
              <option value={0}>일반고객</option>
            </select>
            <select name="active" onChange={onChangeForm}>
              <option value={0}>활성화상태</option>
              <option value={1}>활성화</option>
              <option value={0}>비활성화</option>
            </select>
          </Styled.SelectBox>
          <Button shape="default" size="full" variant="primary" onClick={onAddUserHandler}>
            추가
          </Button>
        </Styled.Container>
      </Styled.Wrapper>
    </BlackBackGround>
  );
};
export default UserAddModal;
