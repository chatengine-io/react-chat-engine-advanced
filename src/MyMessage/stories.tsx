import React from 'react';

import { Meta, Story } from '@storybook/react';

import { MyMessage } from '.';
import { Props } from './props';

import { message } from '../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/MyMessage',
  component: MyMessage,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <MyMessage {...props}></MyMessage>;

export const Default = Template.bind({});
Default.args = {
  lastMessage: null,
  message: message,
  nextMessage: null,
};

export const BetweenMessages = Template.bind({});
BetweenMessages.args = {
  lastMessage: message,
  message: message,
  nextMessage: message,
};
