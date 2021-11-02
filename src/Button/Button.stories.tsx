import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = ({type, children, size}) => <Button type={type} size={size}>{children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Danger',
};
