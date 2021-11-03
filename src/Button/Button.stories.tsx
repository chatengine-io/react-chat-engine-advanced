import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';
import { CheckOutlined, DeleteOutlined, QuestionOutlined } from '@ant-design/icons'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: { control: '' },
    onClick: { control: '' }
  }
};

export default meta;

const Template: Story<Props> = ({type, children, style, icon, onClick}) => <Button type={type} style={style} icon={icon} onClick={onClick}>{children}</Button>;

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

export const Icon = Template.bind({});
Icon.args = {
  children: '',
  icon: <QuestionOutlined />,
};
