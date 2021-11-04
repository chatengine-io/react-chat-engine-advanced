import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatCard } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatCard',
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
};

export const Active = Template.bind({});
Active.args = {
  title: 'Active Chat Card',
  description: 'You are in this chat now...',
  timeStamp: '12:59 PM',
  isActive: true,
};

export const Alert = Template.bind({});
Alert.args = {
  title: 'Notification Card',
  description: 'Alert alert!!!',
  timeStamp: 'Tues',
  hasNotification: true,
};
