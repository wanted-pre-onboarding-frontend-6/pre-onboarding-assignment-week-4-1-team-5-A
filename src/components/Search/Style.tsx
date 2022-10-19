import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Form = styled.form`
  height: 32px;
  ${flexCenter};
  position: relative;
`;

export const Submit = styled.button`
  position: absolute;
  right: 16px;

  :hover {
    transform: scale(1.2);
  }
`;

export const Input = styled.input`
  border: 1px solid;
  border-radius: 10px;
  width: 500px;
  height: 100%;
  padding-left: 32px;
`;
