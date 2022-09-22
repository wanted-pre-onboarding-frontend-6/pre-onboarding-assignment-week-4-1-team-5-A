import { ButtonStyle } from './type';
import { FC } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonStyle> = ({ children, color, width, height, onClick, type, fontSize }) => {
  return (
    <CommonButton
      onClick={onClick}
      color={color}
      width={width}
      height={height}
      type={type}
      fontSize={fontSize}
    >
      {children}
    </CommonButton>
  );
};

export default Button;

const CommonButton = styled.button<ButtonStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => (props.color === 'main' ? '#091E3B' : '#FFFFFF')};
  color: ${(props) => (props.color === 'main' ? '#FFFFFF' : '#091E38')};
  padding: 6px 0;
`;
