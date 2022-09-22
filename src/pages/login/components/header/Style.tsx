import { flexAlignCenter, flexAlignEnd } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexAlignCenter};
  width: 100%;
  height: 80px;
  background-color: #091e3b;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding-left: 48px;
`;

export const Container = styled.div`
  ${flexAlignEnd}
  & > img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;
