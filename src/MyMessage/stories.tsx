import React from 'react';

import { Meta, Story } from '@storybook/react';

import { MyMessage } from '.';
import { Props } from './props';

import { message, messagePlusImage, messagePlusFile } from '../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/MyMessage',
  component: MyMessage,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <MyMessage {...props}></MyMessage>;

export const Default = Template.bind({});
Default.args = {
  message: message,
};

export const BetweenMessages = Template.bind({});
BetweenMessages.args = {
  lastMessage: message,
  message: message,
  nextMessage: message,
};

export const WithImages = Template.bind({});
WithImages.args = {
  message: messagePlusImage,
};

export const WithFiles = Template.bind({});
WithFiles.args = {
  message: messagePlusFile,
};
