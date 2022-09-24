import useAccountList from 'queries/account/useAccountList';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import PageNation from 'components/Pagenation/Pagenation';
import { useEffect, useState } from 'react';
// import ListTable from 'container/ListTable/Table';

interface filterProps {
  is_active: undefined | string;
  accountstatus: undefined | string;
  broker_id: undefined | string;
  created_at: undefined | string;
  limit: undefined | string;
  order: undefined | string;
}

const AccountListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(10);
  }, []);

  return (
    <div>
      <h1>accountlist Page</h1>
      <select name="is_active">
        <option value="true">활성화</option>
        <option value="false">비활성화</option>
      </select>
      <select name="status">
        <option value="1">입금대기</option>
        <option value="2">운용중</option>
        <option value="3">투자중지</option>
        <option value="4">해지</option>
        <option value="9999">관리자확인필요</option>
      </select>
      <select name="broker_id">
        <option value="209">유안타증권</option>
        <option value="218">현대증권</option>
        <option value="230">미래에셋증권</option>
        <option value="238">대우증권</option>
        <option value="240">삼성증권</option>
        <option value="243">한국투자증권</option>
        <option value="247">우리투자증권</option>
        <option value="261">교보증권</option>
        <option value="262">하이투자증권</option>
        <option value="263">HMC투자증권</option>
        <option value="264">키움증권</option>
        <option value="265">이베스트투자증권</option>
        <option value="266">SK증권</option>
        <option value="267">대신증권</option>
        <option value="268">아이엠투자증권</option>
        <option value="269">한화투자증권</option>
        <option value="270">하나대투자증권</option>
        <option value="271">토스증권</option>
        <option value="279">동부증권</option>
        <option value="280">유진투자증권</option>
        <option value="287">메리츠종합금융증권</option>
        <option value="288">카카오페이증권</option>
        <option value="290">부국증권</option>
        <option value="291">신영증권</option>
        <option value="292">LIG투자증권</option>
      </select>
      <select name="created_at">
        <option value="desc">최신순</option>
        <option value="asc">생성순</option>
      </select>
      <select name="limit">
        <option value="10">10개 씩</option>
        <option value="20">20개 씩</option>
        <option value="50">50개 씩</option>
      </select>
      <select name="order">
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
    </div>
  );
};
export default AccountListPage;
