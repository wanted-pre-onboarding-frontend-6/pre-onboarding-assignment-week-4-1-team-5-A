import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'primary-text' | 'text' | 'reverse' | 'default';
  shape: 'default' | 'round';
  size: 'small' | 'medium' | 'large' | 'full';
}

export interface inputStyleProps {
  type: 'input' | 'textarea';
  variant: 'form' | 'border' | 'border-bottom' | 'default';
  shape: 'round' | 'default';
  size: 'small' | 'medium' | 'large' | 'full';
}

export interface SideMeunStyleProps {
  state?: boolean | undefined;
}

export interface PagenationStyleProtps {
  active: boolean;
}
