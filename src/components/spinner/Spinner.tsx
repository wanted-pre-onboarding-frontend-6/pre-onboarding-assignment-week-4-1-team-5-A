import { spin } from 'libs/styles/keyframe';
import styled from 'styled-components';

function Spinner() {
  return <LoadingSpinner />;
}
export default Spinner;

const LoadingSpinner = styled.div`
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.palette.mainColor};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.palette.background};
  animation: ${spin} 1s linear infinite;
`;
