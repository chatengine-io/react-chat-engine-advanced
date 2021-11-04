import React from 'react';

import { Meta, Story } from '@storybook/react';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

import { Button } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: { control: '' },
    onClick: { control: '' },
  },
};

export default meta;

const Template: Story<Props> = ({ type, children, style, icon, onClick }) => (
  <Button type={type} style={style} icon={icon} onClick={onClick}>
    {children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary',
  icon: <CheckOutlined />,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Danger',
  icon: <DeleteOutlined />,
};
