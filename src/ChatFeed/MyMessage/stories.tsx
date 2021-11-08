import React from 'react';

import { Meta, Story } from '@storybook/react';

import { MyMessage } from '.';
import { Props } from './props';

import {
  message,
  messagePlusAttachments,
  chatReadMessage,
} from '../../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/MyMessage',
  component: MyMessage,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <MyMessage {...props} />;

export const Default = Template.bind({});
Default.args = {
  message: messagePlusAttachments,
};

export const BetweenMessages = Template.bind({});
BetweenMessages.args = {
  lastMessage: message,
  message: message,
  nextMessage: message,
};

export const Sending = Template.bind({});
Sending.args = {
  isSending: true,
  message: messagePlusAttachments,
};

export const ReadMessage = Template.bind({});
ReadMessage.args = {
  message: message,
  chat: chatReadMessage,
};
