import { absoluteCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Form = styled.form`
  & > h1 {
    text-align: center;
    margin-bottom: 32px;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.palette.mainColor};
  }

  ${absoluteCenter};
  width: 500px;
  padding: 32px 64px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 4px rgba(27, 31, 35, 0.075);

  & > button {
    width: 100%;
    height: 64px;
    font-size: 22px;
    background-color: #091e3b;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  margin-bottom: 24px;

  & > span {
    position: absolute;
    padding: 2px 8px;
    background-color: #fff;
    margin-left: 32px;
    top: -6px;
  }
  & > input {
    font-size: 14px;
    width: 100%;
    height: 80px;
    border: 1px solid #999;
    border-radius: 16px;
    text-align: center;
  }
`;
