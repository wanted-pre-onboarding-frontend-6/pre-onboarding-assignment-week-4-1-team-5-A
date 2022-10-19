import borkerFormatJson from 'libs/data/brokerFormat.json';

type praseAccount = {
  number: string;
  broker: string;
};

const parseAccount = ({ number, broker }: praseAccount) => {
  const BROKER_FORMAT: string = borkerFormatJson[broker as keyof unknown];
  const hipenIndex = [];

  for (let i = 0; i < BROKER_FORMAT.length; i++) {
    const word = BROKER_FORMAT[i];
    if (word === '-') {
      hipenIndex.push(i);
    }
  }

  const prevAccountNumber = number.slice(0, 2);
  const lastAccountNumber = number.slice(-2, number.length);
  let cryptoNumber = prevAccountNumber + '*'.repeat(number.length - 4) + lastAccountNumber;

  for (let i = 0; i < hipenIndex.length; i++) {
    const index = hipenIndex[i];
    cryptoNumber = cryptoNumber.slice(0, index) + '-' + cryptoNumber.slice(index);
  }

  return cryptoNumber;
};
export default parseAccount;
