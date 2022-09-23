<<<<<<< HEAD
export const Styled = '';
=======
import { inputStyleProps } from 'libs/types/style/stylePros.type';
import styled, { css } from 'styled-components';

const variantCSS = {
  form: css``,
  border: css``,
  'border-bottom': css``,
  default: css``,
};

const shapeCSS = {
  round: css``,
  default: css``,
};

const sizeCSS = {
  small: css``,
  medium: css``,
  large: css``,
  full: css``,
};

export const TextArea = styled.textarea<inputStyleProps>`
  width: 100%;
`;
export const Input = styled.input<inputStyleProps>`
  width: 100%;
`;
>>>>>>> 93e819f (feat: pagenation)
