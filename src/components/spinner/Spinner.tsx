import { spin } from 'libs/styles/keyframe';
import styled from 'styled-components';

function Spinner() {
  return (
    <BlackBackground>
      <SpinnerWrapper>
        <LoadingSpinner />
      </SpinnerWrapper>
    </BlackBackground>
  );
}

export default Spinner;

const BlackBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1100;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

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
