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
Default.args = {};
