import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapeer = styled.div`
  ${flexCenter}
  height: calc(100vh - 180px);
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  padding: 0 15x;
  width: 100%;
`;

export const Filter = styled.div`
  width: 300px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  & button {
    background-color: ${({ theme }) => theme.palette.mainColor};
    color: ${({ theme }) => theme.palette.subColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 4px;
    width: 200px;
    margin-bottom: 8px;

    :hover {
      opacity: 0.8;
    }
  }
`;
