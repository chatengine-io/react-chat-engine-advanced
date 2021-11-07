import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Message } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatFeed/Message',
  component: Message,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <Message {...props}></Message>;

export const Default = Template.bind({});
Default.args = {};
