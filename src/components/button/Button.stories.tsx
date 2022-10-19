import { Story } from '@storybook/react';
import { ButtonStyleProps } from 'types/style/stylePros.type';
import Button from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'primary-text', 'text', 'reverse', 'default'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['default', 'round'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<ButtonStyleProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: 'default',
  children: 'Button Test',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Button Test',
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  variant: 'primary',
  children: 'Button Test',
};

export const PrimaryRound = Template.bind({});
PrimaryRound.args = {
  disabled: false,
  variant: 'primary',
  shape: 'round',
  children: 'Button Test',
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  size: 'small',
  children: 'Button Test',
};

export const Medium = Template.bind({});
Medium.args = {
  disabled: false,
  size: 'medium',
  children: 'Button Test',
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  size: 'large',
  children: 'Button Test',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  disabled: false,
  size: 'full',
  children: 'Button Test',
};
