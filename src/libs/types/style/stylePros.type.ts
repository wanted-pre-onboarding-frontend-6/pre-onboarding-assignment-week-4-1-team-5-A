import { ButtonHTMLAttributes } from 'react';

export interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'primary-text' | 'text' | 'reverse' | 'default';
  shape: 'default' | 'round';
  size: 'small' | 'medium' | 'large' | 'full';
}

export interface SideMeunStyleProps {
  state?: boolean | undefined;
}
