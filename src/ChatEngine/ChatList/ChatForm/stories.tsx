import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatForm } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatEngine/ChatList/ChatForm',
  component: ChatForm,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatForm {...props}></ChatForm>;

export const Default = Template.bind({});
Default.args = {
  customStyle: {
    chatFormStyle: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const OnFormSubmit = Template.bind({});
OnFormSubmit.args = {
  customStyle: {
    chatFormStyle: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  onFormSubmit: (value) => console.log('Submitted', value),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  customStyle: {
    chatFormStyle: {
      maxWidth: '400px',
      border: '2px solid red',
    },
    myChatsTitleStyle: { border: '2px solid blue' },
    chatFormInputStyle: { border: '2px solid orange' },
    chatFormButtonStyle: { border: '2px solid green' },
  },
};
