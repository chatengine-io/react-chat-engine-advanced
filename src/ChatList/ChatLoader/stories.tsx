import React from 'react';

import { Meta, Story } from '@storybook/react';

import { LoadingOutlined } from '@ant-design/icons';

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

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  onVisible: () => console.log('Chat Loader is visible.'),
  style: { maxWidth: '400px', padding: '0px', backgroundColor: '#4a5162' },
  children: (
    <LoadingOutlined
      style={{ fontSize: '21px', padding: '24px', color: '#f0f0f0' }}
    />
  ),
};
