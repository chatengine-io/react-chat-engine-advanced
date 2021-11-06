import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Input } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { control: '' },
    onFocus: { control: '' },
    onBlur: { control: '' },
  },
};

export default meta;

const Template: Story<Props> = (props) => <Input {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Write somthing...',
  defaultValue: '',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  label: 'Default Value',
  defaultValue: 'Default Value',
};

export const SetValue = Template.bind({});
SetValue.args = {
  label: 'Default Value',
  value: 'Set by props',
};
