import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatList } from '.';
import { Props } from './props';

import { chats } from '../../util/mocks';

const meta: Meta = {
  title: 'ChatEngine/ChatList',
  component: ChatList,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatList {...props}></ChatList>;

export const Default = Template.bind({});
Default.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
    },
  },
  chats: chats,
};

export const ActiveChat = Template.bind({});
ActiveChat.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
    },
  },
  chats: chats,
  activeChatID: 202,
  onChatClick: (chatID) => console.log('Chat Click', chatID),
  onChatFormSubmit: (title) => console.log('New Chat', title),
};

export const UnreadMessages = Template.bind({});
UnreadMessages.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
    },
  },
  userName: 'adam_lamorre',
  chats: chats,
};

export const HasMoreChats = Template.bind({});
HasMoreChats.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
    },
  },
  chats: chats,
  hasMoreChats: true,
  onChatLoaderVisible: () => console.log('Load more chats!'),
};

export const Loading = Template.bind({});
Loading.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
    },
  },
  chats: [],
  isLoading: true,
  activeChatID: 202,
  onChatClick: (chatID) => console.log('Chat Click', chatID),
  onChatFormSubmit: (title) => console.log('New Chat', title),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  customStyle: {
    chatListContainer: {
      maxWidth: '400px',
      border: '2px solid red',
      maxHeight: '300px',
    },
    loadingStyle: {
      border: '2px solid blue',
    },
    chatLoader: {
      border: '2px solid green',
    },
  },
  chats: chats,
  hasMoreChats: true,
  activeChatID: 202,
};
