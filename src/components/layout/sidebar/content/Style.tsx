import { SideMeunStyleProps } from 'libs/types/style/stylePros.type';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 64px 0;
  color: ${({ theme }) => theme.palette.fontSubColor};

  & > div:last-child {
    margin-top: 64px;
  }
`;

export const Menu = styled.div<SideMeunStyleProps>`
  width: 100%;
  margin: 16px 0;
  font-size: ${({ theme }) => theme.fontSize.xxLarge};

  & > p {
    font-weight: ${({ state }) => state && 'bold'};
    color: ${({ state, theme }) => (state ? '#fff' : theme.palette.fontSubColor)};
    padding: 8px 64px;
  }

  & > ul {
    height: 0px;
    overflow: hidden;
    transition: all 1s ease-in-out;
    ${({ state }) => state && 'height: 64px;'}
  }
`;

export const List = styled.li<SideMeunStyleProps>`
  width: 100%;
  padding: 16px 0 16px 196px;
  background-color: ${({ state }) => state && 'rgba(217, 217, 217, 0.1)'};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ state }) => state && 'bold'};
  color: ${({ state, theme }) => (state ? '#fff' : theme.palette.fontSubColor)};
`;
