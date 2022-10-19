import { FC } from 'react';
import { ButtonStyleProps } from 'types/style/stylePros.type';
import * as Styled from './Style';

const Button: FC<ButtonStyleProps> = ({ variant, shape, size, children, ...rest }) => {
  return (
    <Styled.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
