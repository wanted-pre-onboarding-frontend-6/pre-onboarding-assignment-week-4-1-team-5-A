import styled from 'styled-components';
import { flexAlignCenter, flexAlignEnd } from 'libs/styles/common';

export const Wrapper = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background-color: #091e3b;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 0 32px;
  & > div {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  ${flexAlignEnd}
  & > img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;
