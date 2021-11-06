import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatList } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatList',
  component: ChatList,
  argTypes: {},
};

const chats = [
  {
    id: 201,
    title: 'First Chat ☝️',
    is_direct_chat: false,
    created: '2021-01-28T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [
      {
        last_read: 1000,
        person: {
          username: 'Adam La Morre',
          first_name: '',
          last_name: '',
          avatar: '',
          custom_json: '',
          is_online: true,
        },
        chat_updated: '',
      },
    ],
    last_message: {
      id: 1000,
      created: '2021-07-14 01:18:24.567443+00:00',
      attachments: [],
      sender_username: 'Adam_La_Morre',
      text: '<p>Hello there world!</p>',
      custom_json: '{"sender_id":"1626225504264"}',
    },
  },
  {
    id: 202,
    title: 'Chat Two ✌️ ',
    is_direct_chat: false,
    created: '2021-01-27T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
  {
    id: 203,
    title: 'Direct Message w/ Adam',
    is_direct_chat: true,
    created: '2021-01-26T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
];

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
  userName: 'Adam La Morre',
  chats: chats,
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
