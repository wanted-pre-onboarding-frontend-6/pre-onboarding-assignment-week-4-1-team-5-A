import { Story } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'common/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['alert', 'confirm'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const AlertModal = Template.bind({});
AlertModal.args = {
  variant: 'alert',
  title: 'Test',
  children: <div>test</div>,
  onSucces: () => {
    console.log('success');
  },
  onCancle: () => {
    console.log('cancle');
  },
};

export const ConfirmModal = Template.bind({});
ConfirmModal.args = {
  variant: 'confirm',
  title: 'Test',
  children: <div>test</div>,
  onSucces: () => {
    console.log('success');
  },
  onCancle: () => {
    console.log('cancle');
  },
};
