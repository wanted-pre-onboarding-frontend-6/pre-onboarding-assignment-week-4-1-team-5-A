import { flexAlignCenter, flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexAlignCenter};
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.palette.subColor};
  box-shadow: 1px 0px 16px 5px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  width: 100%;
  padding: 64px;
  ${flexJustifyBetween};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
