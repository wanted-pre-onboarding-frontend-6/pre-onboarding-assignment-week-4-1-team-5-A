import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  height: calc(100vh - 180px);
  ${flexCenter}
  flex-direction: column;
`;

export const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: #fff;
`;
