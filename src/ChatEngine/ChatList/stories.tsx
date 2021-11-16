import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatList } from '.';
import { Props } from './props';

import { chats } from '../../util/mocks';

const meta: Meta = {
  title: 'ChatList',
  component: ChatList,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatList {...props}></ChatList>;

export const Default = Template.bind({});
Default.args = {
  style: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: '300px',
  },
  chats: chats,
};

export const ActiveChat = Template.bind({});
ActiveChat.args = {
  style: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: '300px',
  },
  chats: chats,
  activeChatID: 202,
  onChatClick: (chatID) => console.log('Chat Click', chatID),
  onChatFormSubmit: (title) => console.log('New Chat', title),
};

export const UnreadMessages = Template.bind({});
UnreadMessages.args = {
  style: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: '300px',
  },
  userName: 'adam_lamorre',
  chats: chats,
};

export const HasMoreChats = Template.bind({});
HasMoreChats.args = {
  style: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
  chats: chats,
  hasMoreChats: true,
  onChatLoaderVisible: () => console.log('Load more chats!'),
};

export const Loading = Template.bind({});
Loading.args = {
  style: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: '300px',
  },
  chats: [],
  isLoading: true,
  activeChatID: 202,
  onChatClick: (chatID) => console.log('Chat Click', chatID),
  onChatFormSubmit: (title) => console.log('New Chat', title),
};
