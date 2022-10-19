const parsePhone = (number: string) => {
  const originNumber = number.split('-');
  const firstNumber = originNumber[0];
  const centerNumber = '*'.repeat(originNumber[1].length);
  const lastNumber = originNumber[2];
  return `${firstNumber}-${centerNumber}-${lastNumber}`;
};
export default parsePhone;
