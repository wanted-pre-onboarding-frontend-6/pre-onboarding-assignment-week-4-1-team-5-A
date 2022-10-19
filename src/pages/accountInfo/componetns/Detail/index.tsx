import { UserService } from 'apis';
import parseAccount from 'libs/utils/parseAccount';
import useAccountDetail from 'queries/account/useAccountDetail';
import brokerJson from 'libs/data/brokers.json';
import AccountStatusJson from 'libs/data/accountStatus.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Style';
import AccountDetailChart from '../Chart/Chart';
import parseChart from 'libs/utils/parseChart';
import { AcouuntInfo } from 'types/api/accountApi.type';

export type ChartItemType = {
  color: string;
  height: number;
  width: number;
  name: string;
  value: number;
};

const AccountDetail = () => {
  const { accountId } = useParams();
  const [account, setAccount] = useState<AcouuntInfo | undefined>();
  const [chartItem, setChartItem] = useState<ChartItemType[]>([]);
  const accountDetailQuery = useAccountDetail({ accountId: accountId });

  // set account
  useEffect(() => {
    if (!accountDetailQuery.data) return;
    const accountDetail = accountDetailQuery.data.data;

    UserService.getUserDetail({ userId: accountDetail.user_id }).then((res) => {
      const userinfo = res.data;
      accountDetail.username = userinfo.name;
      setAccount(accountDetail);
    });
  }, [accountDetailQuery.data]);

  // set Chart Item
  useEffect(() => {
    if (!account) return;
    const chartItem: ChartItemType[] = parseChart({
      assets: account.assets,
      payments: account.payments,
    });
    setChartItem(chartItem);
  }, [account]);

  return (
    <Styled.Wrapper>
      <Styled.Info>
        고객명: <div>{account?.username}</div>
      </Styled.Info>
      <Styled.Info>
        계좌명: <div>{account?.name}</div>
      </Styled.Info>
      <Styled.Info>
        브로커명: <div>{brokerJson[account?.broker_id as keyof unknown]}</div>
      </Styled.Info>
      <Styled.Info>
        계좌번호:{' '}
        <div>
          {account &&
            parseAccount({
              number: account?.number,
              broker: account?.broker_id,
            })}
        </div>
      </Styled.Info>
      <Styled.Info>
        계좌상태:{' '}
        <div>
          {account &&
            Object.keys(AccountStatusJson).find(
              (key) => AccountStatusJson[key as keyof unknown] === account.status,
            )}
        </div>
      </Styled.Info>
      <Styled.ChartWrapper>
        <AccountDetailChart item={chartItem} width={300} height={300} />
      </Styled.ChartWrapper>
    </Styled.Wrapper>
  );
};
export default AccountDetail;
