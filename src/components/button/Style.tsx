import { ButtonStyleProps } from 'libs/types/style/stylePros.type';
import styled, { css } from 'styled-components';

const variantCSS = {
  primary: css`
    background: ${({ theme }) => theme.palette.mainColor};
    color: ${({ theme }) => theme.palette.subColor};
    &:disabled {
      opacity: 0.3;
    }
  `,

  'primary-text': css`
    background: none;
    color: ${({ theme }) => theme.palette.mainColor};
  `,

  text: css`
    background: none;
    border: none;
  `,

  reverse: css`
    background: ${({ theme }) => theme.palette.subColor};
    outline: 1px solid ${({ theme }) => theme.palette.fontSubColor};
    color: ${({ theme }) => theme.palette.mainColor};
  `,

  default: css`
    background: ${({ theme }) => theme.palette.subColor};
    border: 1px solid ${({ theme }) => theme.palette.fontSubColor};

    &:disabled {
      opacity: 0.3;
    }
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 16px;
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    height: 32px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,

  medium: css`
    width: 300px;
    height: 48px;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,

  large: css`
    width: 450px;
    height: 64px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `,

  full: css`
    width: 100%;
    padding: 16px 0;
  `,
};

export const Button = styled.button<ButtonStyleProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.8;
  }
`;
