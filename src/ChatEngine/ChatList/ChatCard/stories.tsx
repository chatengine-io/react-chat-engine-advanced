import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatCard } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatEngine/ChatList/ChatCard',
  component: ChatCard,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatCard {...props} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Chat Card',
  description: 'This is where the magic happens',
  timeStamp: '4:24 PM',
  customStyle: {
    chatCardContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const Active = Template.bind({});
Active.args = {
  title: 'Active Chat Card',
  description: 'You are in this chat now...',
  timeStamp: '12:59 PM',
  isActive: true,
  customStyle: {
    chatCardContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const Notification = Template.bind({});
Notification.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  hasNotification: true,
  customStyle: {
    chatCardContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  isLoading: true,
  customStyle: {
    chatCardContainer: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  customStyle: {
    chatCardContainer: {
      maxWidth: '400px',
      border: '2px solid red',
    },
    titleText: { border: '2px solid blue' },
    messageText: { border: '2px solid green', width: 'calc(70%)' },
    activeChatDot: { border: '2px solid yellow' },
    hoveredChat: { border: '2px solid orange' },
    activeChat: { border: '2px solid purple' },
    loadingBar: { border: '2px solid brown' },
  },
};
