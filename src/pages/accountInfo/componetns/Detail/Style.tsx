import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  position: relative;
  ${flexCenter};
  justify-content: space-between;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  margin: 16px;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  & > div {
    width: 80%;
    text-align: center;
    border-bottom: 3px solid #222222;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const ChartWrapper = styled.div`
  position: absolute;
  bottom: 64px;
  right: 0;
`;
