import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexCenter};
  position: absolute;
  bottom: 0;
  width: calc(100% - 300px);
  height: 100px;
  background-color: ${({ theme }) => theme.palette.subColor};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.fontSubColor};

  & > span:first-child {
    color: ${({ theme }) => theme.palette.mainColor};
  }
  & > span:last-child {
    margin-left: 8px;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
