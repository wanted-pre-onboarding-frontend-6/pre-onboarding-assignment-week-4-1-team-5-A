import { flexCenter } from 'libs/styles/common';
import { PagenationStyleProtps } from 'libs/types/style/stylePros.type';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexCenter}
  & button {
    width: 24px;
    height: 24px;
    padding: 16px;
    margin: 0 4px;
    background-color: ${({ theme }) => theme.palette.subColor};
    color: ${({ theme }) => theme.palette.mainColor};

    :hover {
      opacity: 0.8;
    }

    :disabled {
      opacity: 0.5;
    }
  }
`;

export const Page = styled.div<PagenationStyleProtps>`
  ${flexCenter}
  width: 24px;
  height: 24px;
  padding: 16px;
  background-color: ${(props) =>
    props.active ? props.theme.palette.mainColor : props.theme.palette.subColor};

  color: ${(props) =>
    props.active ? props.theme.palette.subColor : props.theme.palette.fontColor};

  margin: 0 4px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.palette.mainColor};
    color: ${({ theme }) => theme.palette.subColor};
  }
`;
