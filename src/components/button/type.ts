import { ReactNode } from 'react';

export interface ButtonStyle {
  children?: ReactNode;
  color?: 'main' | 'sub';
  width?: string;
  height?: string;
  onClick?: any;
  fontSize?: string;
  type?: 'button' | 'submit' | undefined;
}
