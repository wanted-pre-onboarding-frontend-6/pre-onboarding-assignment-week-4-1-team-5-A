const parseChart = ({ assets, payments }: { assets: number; payments: number }) => {
  let chartItem = [];

  const ASSETS = Math.ceil(assets);
  const PAYMENTS = Math.ceil(payments);
  let state;
  let ratio;

  if (ASSETS > PAYMENTS) {
    state = '흑자';
    ratio = Math.ceil((PAYMENTS / ASSETS) * 100);
  } else if (ASSETS < PAYMENTS) {
    state = '적자';
    ratio = Math.ceil((ASSETS / PAYMENTS) * 100);
  } else {
    state = '유지';
    ratio = 50;
  }

  chartItem = [
    {
      name: '총 자산',
      value: ASSETS,
      width: 30,
      height: state === '흑자' ? 100 : ratio,
      color: state === '흑자' ? '#FF5722' : '#091E3B',
    },
    {
      name: '총 투자 금액',
      value: PAYMENTS,
      width: 30,
      height: state === '적자' ? 100 : ratio,
      color: state === '적자' ? '#FF5722' : '#091E3B',
    },
  ];

  return chartItem;
};
export default parseChart;
