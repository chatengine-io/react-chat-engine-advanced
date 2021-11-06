import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatList } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatList',
  component: ChatList,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatList {...props}></ChatList>;

export const Default = Template.bind({});
Default.args = {
  style: { maxWidth: '400px', boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)' },
};
