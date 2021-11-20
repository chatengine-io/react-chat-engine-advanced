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
  chatCardStyle: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const Active = Template.bind({});
Active.args = {
  title: 'Active Chat Card',
  description: 'You are in this chat now...',
  timeStamp: '12:59 PM',
  isActive: true,
  chatCardStyle: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const Notification = Template.bind({});
Notification.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  hasNotification: true,
  chatCardStyle: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  isLoading: true,
  chatCardStyle: {
    maxWidth: '400px',
    boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  chatCardStyle: {
    maxWidth: '400px',
    border: '2px solid red',
  },
  hoveredChatCardStyle: { border: '2px solid lime' },
  activeChatCardStyle: { border: '2px solid pink' },
  chatCardTitleStyle: { border: '2px solid blue' },
  chatCardNotificationStyle: { border: '2px solid yellow' },
  chatCardSubtitleStyle: { border: '2px solid green' },
  chatCardTimeStampStyle: { border: '2px solid orange' },
  chatCardLoadingBarStyle: { border: '2px solid purple' },
};
