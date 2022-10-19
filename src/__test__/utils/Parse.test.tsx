import parseAccount from 'libs/utils/parseAccount';
import parseAssets from 'libs/utils/parseAssets';
import parseChart from 'libs/utils/parseChart';
import parsePhone from 'libs/utils/parsePhone';

describe('JSON DATA PARSE', () => {
  const ASSETS = 300000000;
  const PAYMENTS = 100000000;
  const NUMBER = '000000000000';
  const PHONE = '010-1234-5678';
  const BROKERID = '209';

  test('예산 3자리 마다 쉼표 추가하기', () => {
    const expection = '100,000,000';
    const result = parseAssets(PAYMENTS);
    expect(result).toEqual(expection);
  });

  test('계좌 번호 브로커명별 포멧 맞추기 및 암호화', () => {
    const expection = '00-********-00';
    const result = parseAccount({ number: NUMBER, broker: BROKERID });
    expect(result).toEqual(expection);
  });

  test('핸드폰 가운데 4자리 암호화', () => {
    const expection = '010-****-5678';
    const result = parsePhone(PHONE);
    expect(result).toEqual(expection);
  });

  test('차트 아이템 배열 추출하기', () => {
    const budget = 100000;
    let ratio;
    if (ASSETS > PAYMENTS) {
      ratio = Math.ceil((PAYMENTS / ASSETS) * 100);
    } else if (ASSETS < PAYMENTS) {
      ratio = Math.ceil((ASSETS / PAYMENTS) * 100);
    } else {
      ratio = 50;
    }

    const expection = [
      {
        name: '총 자산',
        value: ASSETS,
        width: 30,
        height: 100,
        color: '#FF5722',
      },
      {
        name: '총 투자 금액',
        value: PAYMENTS,
        width: 30,
        height: ratio,
        color: '#091E3B',
      },
    ];

    const result = parseChart({ assets: ASSETS, payments: PAYMENTS });
    expect(result).toEqual(expection);
  });
});
