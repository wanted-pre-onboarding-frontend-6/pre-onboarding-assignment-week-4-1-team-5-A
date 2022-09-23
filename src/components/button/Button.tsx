import { FC } from 'react';
import { ButtonStyleProps } from 'libs/types/style/stylePros.type';
import * as Styled from './Style';

const Button: FC<ButtonStyleProps> = ({ variant, shape, size, children, ...rest }) => {
  return (
    <Styled.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
