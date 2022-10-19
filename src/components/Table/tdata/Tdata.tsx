import * as Styled from './Style';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useInput from 'hooks/useInput';
import brokerJson from 'libs/data/brokers.json';
import AccountStatusJson from 'libs/data/accountStatus.json';
import parseAccount from 'libs/utils/parseAccount';
import parsePhone from 'libs/utils/parsePhone';
import parseAssets from 'libs/utils/parseAssets';
dayjs.locale('ko');

type TdataPropsType = {
  type: 'account' | 'user';
  data: any;
  onEditUser: any;
  onDeleteUser: any;
};

const Tdata = ({ type, data, onEditUser, onDeleteUser }: TdataPropsType) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editName, onChageEditName, setEditName] = useInput(data.name);

  useEffect(() => {
    setEditName(data.name);
  }, [data]);

  const onDeleteUserHandler = () => {
    onDeleteUser({ userId: data.id, userSettingId: data.setting.id });
  };

  const onEditUserHandler = () => {
    console.log(onEditUser);
    onEditUser({ editName, userinfo: data, setEdit });
  };

  const onAssetsStatus = (assets: number, payments: number) => {
    const asset = Math.ceil(assets);
    const payment = Math.ceil(payments);

    if (asset < payment) return 'red';
    if (asset > payment) return 'blue';
    return 'black';
  };

  return type === 'user' ? (
    <Styled.Tr>
      <td className="user_delBtn" onClick={onDeleteUserHandler}>
        X
      </td>
      <td className="user_name">
        {edit ? (
          <textarea value={editName} onChange={onChageEditName}></textarea>
        ) : (
          <Link to={'/users/user-list/' + data.id}>{data.name}</Link>
        )}
        <button onClick={edit ? onEditUserHandler : () => setEdit(true)}>
          {edit ? '완료' : '수정'}
        </button>
      </td>
      <td>{data.account}</td>
      <td>{data.email}</td>
      <td>{data.gender_origin}</td>
      <td>{dayjs(data.birth_date).format('YYYY-MM-DD')}</td>
      <td>{parsePhone(data.phone_number)}</td>
      <td>{dayjs(data.last_login).format('YYYY-MM-DD')}</td>
      <td>{data.setting.allow_marketing_push ? 'Y' : 'N'}</td>
      <td>{data.setting.is_staff ? 'Y' : 'N'}</td>
      <td>{data.setting.is_active ? 'Y' : 'N'}</td>
      <td>{dayjs(data.created_at).format('YYYY-MM-DD')}</td>
    </Styled.Tr>
  ) : (
    <Styled.Tr status={onAssetsStatus(data.assets, data.payments)}>
      <td>
        <Link to={'/users/user-list/' + data.user_id}>{data.username}</Link>
      </td>
      <td>{brokerJson[data.broker_id as keyof unknown]}</td>
      <td>
        <Link to={'/accounts/account-list/' + data.id}>
          {parseAccount({ number: data.number, broker: data.broker_id })}
        </Link>
      </td>
      <td>
        {Object.keys(AccountStatusJson).find(
          (key) => AccountStatusJson[key as keyof unknown] === data.status,
        )}
      </td>
      <td>{data.name}</td>
      <td className="assets">
        {parseAssets(data.assets)}
        <p>{parseAssets(data.assets - data.payments)}</p>
      </td>
      <td>{parseAssets(data.payments)}</td>
      <td>{data.is_active ? 'Y' : 'N'}</td>
      <td>{dayjs(data.created_at).format('YYYY-MM-DD')}</td>
    </Styled.Tr>
  );
};
export default Tdata;
