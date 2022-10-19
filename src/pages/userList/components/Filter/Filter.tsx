import useQueryString from 'hooks/useQureyString';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Style';

const UserListFilter = () => {
  const qs = useQueryString();
  const navigate = useNavigate();

  const onCnageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      qs.delete(e.target.name);
    } else {
      qs.delete('page');
      qs.set(e.target.name, e.target.value);
    }
    navigate(`?${qs.toString()}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Select name="staff" onChange={onCnageSelect}>
          <Styled.Option value="">임직원여부</Styled.Option>
          <Styled.Option value="true">임직원</Styled.Option>
          <Styled.Option value="false">일반</Styled.Option>
        </Styled.Select>
        <Styled.Select name="active" onChange={onCnageSelect}>
          <Styled.Option value="">활성화여부</Styled.Option>
          <Styled.Option value="true">활성화</Styled.Option>
          <Styled.Option value="false">비활성화</Styled.Option>
        </Styled.Select>
        <Styled.Select name="sort" onChange={onCnageSelect}>
          <Styled.Option value="createdAt">최신순</Styled.Option>
          <Styled.Option value="name">이름순</Styled.Option>
          <Styled.Option value="last_login">로그인순</Styled.Option>
        </Styled.Select>
        <Styled.Select name="order" onChange={onCnageSelect}>
          <Styled.Option value="desc">내림차순</Styled.Option>
          <Styled.Option value="asc">오름차순</Styled.Option>
        </Styled.Select>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default UserListFilter;
