import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatLoader } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatList/ChatLoader',
  component: ChatLoader,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatLoader {...props}></ChatLoader>;

export const Default = Template.bind({});
Default.args = {
  onVisible: () => console.log('Chat Loader is visible.'),
  style: { maxWidth: '400px' },
};
